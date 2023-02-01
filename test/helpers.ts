import { Repository } from 'typeorm';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};
  
export const repoMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOneBy: jest.fn(entity => entity),
  findOne: jest.fn(entity => entity),
  find: jest.fn(entity => entity),
  count: jest.fn(entity => entity),
}));
