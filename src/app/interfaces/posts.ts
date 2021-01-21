export interface Post {
  time: number;
  priv: boolean;
  hasImg: boolean;
  postId: string;
  ownerDetails: {
    Name: string;
    accVerified: boolean;
    uIdRef?: string;
    postedTo?: {
      ifGroup?: boolean;
      privGroup?: boolean;
      group?: {
        groupName: string;
        groupId: string;
      };
      selfPost?: boolean;
      friendsWall?: {
        friendsName: string;
        closeFriend?: boolean;
      };
    };
  };
  postDetails?: {
    caption: string;
    postedPicUrl?: [{downloadURL:any,storagePath: any}];
    action?: {
      like?: {
        UserLiked: false;
        likedBy: [{ displayName: ''; userIdRef: '' }];
      };
      comments?: [
        {
          displayName: ''; userIdRef: ''; comment: ''; time: ''; replay: [
            { displayName: ''; userIdRef: ''; comment: ''; time: '' }
          ]
        }
      ];
      share?: {
        // TODO
      };
    };
  };
  taggedFriends?: {
    friends: [];
  };
}
