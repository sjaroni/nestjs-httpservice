import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()

export class GenderqueryService {

    constructor(private readonly httpService: HttpService) {}
  
    async getGender(firstName: string) {
      const url = `https://api.genderize.io?name=${firstName}`;
      const response = await this.httpService.axiosRef.get(url);
      return response.data; // Enthält z. B. { "name": "Alex", "gender": "male", "probability": 0.95 }
    }
  }
  

