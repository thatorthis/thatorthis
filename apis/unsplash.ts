import axios from "axios";

export interface Image {
  alt: string;
  url: string;
}

export class UnsplashClient {
  private _baseURL: string;
  private _clientId: string;

  constructor(clientId: string) {
    this._baseURL = "https://api.unsplash.com";
    this._clientId = clientId;
  }

  async searchImages(
    query: string,
    { page = 1, per_page = 20 } = {}
  ): Promise<Image[]> {
    const { data } = await axios.get(`${this._baseURL}/search`, {
      params: {
        client_id: this._clientId,
        query,
        lang: "ko",
        page,
        per_page,
      },
    });
    return data.photos.results.map((item: any) => ({
      alt: item.alt_description,
      url: item.urls.regular,
    }));
  }
}
