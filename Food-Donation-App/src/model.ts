export interface Post {
  Time: string; // You may want to use a Date type if it's a timestamp
  Author: string;
  Type: string;
  Text: string;
  ZipCode: string;
  ProfilePictureUrl: string;
  FoodTypePictureURL: string;
}

export interface UnclaimedPostModel {
  time: Date;
  author: string;
  type: string;
  text: string;
  zipCode: number;
  profilePictureUrl: string;
  foodTypePictureUrl: string;
}

