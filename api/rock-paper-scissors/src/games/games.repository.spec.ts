import { GamesRepository } from './games.repository';
import { Game } from './game.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { GamesModule } from './games.module';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from '../../test/functional/database.config';

describe('GamesRepository', () => {
  let repository: GamesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        GamesModule,
        TypeOrmModule.forRoot({
          ...databaseConfig,
          entities: [Game],
        }),
      ],
      providers: [
      ],
    }).compile();

    repository = module.get<GamesRepository>(getRepositoryToken(GamesRepository));
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(repository.target).toBe(Game);
  });
});
