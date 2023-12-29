export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface PrefecturesApiResponse {
  message: null | string;
  result: Prefecture[];
}
