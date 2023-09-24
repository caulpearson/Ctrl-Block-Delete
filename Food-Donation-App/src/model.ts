export interface PostModel {
  Id: number,
  Time: Date,
  Author: string,
  Text: string,
  ProfilePicture: string,
  Image: string,
  DistanceAway: string,
  ZipCode: number,
  Decision: number
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

