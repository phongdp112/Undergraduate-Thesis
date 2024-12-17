import apiClient from '../Auth/apiClient';

export interface Stm32Response {
    stm32SerialNumber: string;
    gardenName: string;
    stm32Name: string;
    is_connected: boolean;
    last_connected: Date;
    deviceQuantity: BigInt
  }

const stm32Service = {
    fetchAll: async (): Promise<Stm32Response[]> => { 
        try {
          // Gọi API đăng nhập và lấy JWT token
          const response = await apiClient.get('/api/stm32/get-all');
          const stm32Data: Stm32Response[] = response.data.map((item: any) => ({
            ...item,
            last_connected: new Date(item.last_connected),  // Chuyển đổi chuỗi ISO thành đối tượng Date
            deviceQuantity: BigInt(item.deviceQuantity),  // Chuyển đổi nếu cần thiết
        }));

        return stm32Data; 

        } catch (error) {
          throw new Error('Failed to fetch STM32 devices');
        }
      },
};

export default stm32Service;
