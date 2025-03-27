import { Injectable, HttpService } from '@nestjs/common';
@Injectable()
export class GenderqueryService {

    constructor(private readonly httpService: HttpService) {}
  
    async getGender(firstName: string, lastName?: string) {
      const url = `https://api.genderize.io?name=${firstName}`;
      const response = await this.httpService.axiosRef.get(url);
      return response.data; // Enthält z. B. { "name": "Alex", "gender": "male", "probability": 0.95 }
    }
  }
  

