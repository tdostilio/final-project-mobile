//
//  ContactManager.m
//  AwesomeContact
//
//  Created by Chris Aquino on 2017-10-04.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "ContactManager.h"
#import <Contacts/Contacts.h>

@implementation ContactManager

RCT_EXPORT_MODULE()


- (NSString *)thumbnailFilePath:(NSString *)recordID
{
  NSString *filename = [recordID stringByReplacingOccurrencesOfString:@":ABPerson" withString:@""];
  NSString* filepath = [NSString stringWithFormat:@"%@/rncontacts_%@.png", [self getPathForDirectory:NSCachesDirectory], filename];
  return filepath;
}

-(NSString *) getFilePathForThumbnailImage:(CNContact*) contact recordID:(NSString*) recordID
{
  NSString *filepath = [self thumbnailFilePath:recordID];
  
  if([[NSFileManager defaultManager] fileExistsAtPath:filepath]) {
    return filepath;
  }
  
  if (contact.imageDataAvailable){
    NSData *contactImageData = contact.thumbnailImageData;
    
    BOOL success = [[NSFileManager defaultManager] createFileAtPath:filepath contents:contactImageData attributes:nil];
    
    if (!success) {
      NSLog(@"Unable to copy image");
      return @"";
    }
    
    return filepath;
  }
  
  return @"";
}



- (NSString *)getPathForDirectory:(int)directory
{
  NSArray *paths = NSSearchPathForDirectoriesInDomains(directory, NSUserDomainMask, YES);
  return [paths firstObject];
}


-(NSDictionary*) contactToDictionary:(CNContact *) person
                      withThumbnails:(BOOL)withThumbnails
{
  NSMutableDictionary* output = [NSMutableDictionary dictionary];
  
  NSString *recordID = person.identifier;
  NSString *givenName = person.givenName;
  NSString *familyName = person.familyName;
  NSString *middleName = person.middleName;
  NSString *company = person.organizationName;
  NSString *jobTitle = person.jobTitle;
  
  [output setObject:recordID forKey: @"recordID"];
  
  if (givenName) {
    [output setObject: (givenName) ? givenName : @"" forKey:@"givenName"];
  }
  
  if (familyName) {
    [output setObject: (familyName) ? familyName : @"" forKey:@"familyName"];
  }
  
  if(middleName){
    [output setObject: (middleName) ? middleName : @"" forKey:@"middleName"];
  }
  
  if(company){
    [output setObject: (company) ? company : @"" forKey:@"company"];
  }
  
  if(jobTitle){
    [output setObject: (jobTitle) ? jobTitle : @"" forKey:@"jobTitle"];
  }
  
  //handle phone numbers
  NSMutableArray *phoneNumbers = [[NSMutableArray alloc] init];
  
  for (CNLabeledValue<CNPhoneNumber*>* labeledValue in person.phoneNumbers) {
    NSMutableDictionary* phone = [NSMutableDictionary dictionary];
    NSString * label = [CNLabeledValue localizedStringForLabel:[labeledValue label]];
    NSString* value = [[labeledValue value] stringValue];
    
    if(value) {
      if(!label) {
        label = [CNLabeledValue localizedStringForLabel:@"other"];
      }
      [phone setObject: value forKey:@"number"];
      [phone setObject: label forKey:@"label"];
      [phoneNumbers addObject:phone];
    }
  }
  
  [output setObject: phoneNumbers forKey:@"phoneNumbers"];
  //end phone numbers
  
  //handle emails
  NSMutableArray *emailAddreses = [[NSMutableArray alloc] init];
  
  for (CNLabeledValue<NSString*>* labeledValue in person.emailAddresses) {
    NSMutableDictionary* email = [NSMutableDictionary dictionary];
    NSString* label = [CNLabeledValue localizedStringForLabel:[labeledValue label]];
    NSString* value = [labeledValue value];
    
    if(value) {
      if(!label) {
        label = [CNLabeledValue localizedStringForLabel:@"other"];
      }
      [email setObject: value forKey:@"email"];
      [email setObject: label forKey:@"label"];
      [emailAddreses addObject:email];
    } else {
      NSLog(@"ignoring blank email");
    }
  }
  
  [output setObject: emailAddreses forKey:@"emailAddresses"];
  //end emails
  
  //handle postal addresses
  NSMutableArray *postalAddresses = [[NSMutableArray alloc] init];
  
  for (CNLabeledValue<CNPostalAddress*>* labeledValue in person.postalAddresses) {
    CNPostalAddress* postalAddress = labeledValue.value;
    NSMutableDictionary* address = [NSMutableDictionary dictionary];
    
    NSString* street = postalAddress.street;
    if(street){
      [address setObject:street forKey:@"street"];
    }
    NSString* city = postalAddress.city;
    if(city){
      [address setObject:city forKey:@"city"];
    }
    NSString* state = postalAddress.state;
    if(state){
      [address setObject:state forKey:@"state"];
    }
    NSString* region = postalAddress.state;
    if(region){
      [address setObject:region forKey:@"region"];
    }
    NSString* postCode = postalAddress.postalCode;
    if(postCode){
      [address setObject:postCode forKey:@"postCode"];
    }
    NSString* country = postalAddress.country;
    if(country){
      [address setObject:country forKey:@"country"];
    }
    
    NSString* label = [CNLabeledValue localizedStringForLabel:labeledValue.label];
    if(label) {
      [address setObject:label forKey:@"label"];
      
      [postalAddresses addObject:address];
    }
  }
  
  [output setObject:postalAddresses forKey:@"postalAddresses"];
  //end postal addresses
  
  [output setValue:[NSNumber numberWithBool:person.imageDataAvailable] forKey:@"hasThumbnail"];
  if (withThumbnails) {
    [output setObject:[self getFilePathForThumbnailImage:person recordID:recordID] forKey:@"thumbnailPath"];
  }
  
  return output;
}

RCT_EXPORT_METHOD(  getContacts:(RCTResponseSenderBlock)successCallback
                  errorCallback:(RCTResponseSenderBlock)failureCallback) {
  
  // #Step 1
  NSLog(@"%@ %@", NSStringFromClass([self class]), NSStringFromSelector(_cmd));

  CNContactStore *store = [[CNContactStore alloc] init];
  NSMutableArray *contacts = [[NSMutableArray alloc] init];
  NSError *contactError = nil;
  NSArray *keys = @[
                    CNContactEmailAddressesKey,
                    CNContactPhoneNumbersKey,
                    CNContactFamilyNameKey,
                    CNContactGivenNameKey,
                    CNContactMiddleNameKey,
                    CNContactPostalAddressesKey,
                    CNContactOrganizationNameKey,
                    CNContactJobTitleKey,
                    CNContactImageDataAvailableKey
                    ];
  NSArray *arrayOfContacts = [store unifiedContactsMatchingPredicate:nil
                                                         keysToFetch:keys
                                                               error:&contactError];
  [arrayOfContacts enumerateObjectsUsingBlock:^(CNContact * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
    NSDictionary *contactDictionary = [self contactToDictionary:obj withThumbnails:NO];
    [contacts addObject:contactDictionary];
  }];
  
  NSLog(@"%@",[contactError localizedDescription]);
  
  successCallback(@[[NSNull null], contacts]);
  
  
  
  
//  successCallback(@[@"doStuff method called"]);
}


//RCT_EXPORT_METHOD(getContacts: (RCTResponseSenderBlock) callback)
//{
//  CNContactStore *store = [[CNContactStore alloc] init];
//  [store requestAccessForEntityType:CNEntityTypeContacts completionHandler:^(BOOL granted, NSError * _Nullable error) {
//    if (granted == YES) {
//      //keys with fetching properties
//      NSArray *keys = @[CNContactFamilyNameKey, CNContactGivenNameKey, CNContactPhoneNumbersKey, CNContactImageDataKey];
//      CNContactFetchRequest *request = [[CNContactFetchRequest alloc] initWithKeysToFetch:keys];
//      NSError *error;
//      BOOL success = [store enumerateContactsWithFetchRequest:request error:&error usingBlock:^(CNContact * __nonnull contact, BOOL * __nonnull stop) {
//        if (error) {
//          NSLog(@"error fetching contacts %@", error);
//        } else {
//          // copy data to my custom Contact class.
//          Contact *newContact = [[Contact alloc] init];
//          newContact.firstName = contact.givenName;
//          newContact.lastName = contact.familyName;
//          // etc.
//        }
//      }];
//    }
//  }];
//}

@end
