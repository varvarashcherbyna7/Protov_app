export interface IAPI2Request {
  object_id: string;
  owner_password: string;
}

export interface IAPI2Response {
  artist_surname: string;
  artist_firstname: string;
  title: string;
  year: number;
  object_id: string;
  owner_ver_status: boolean;
}
