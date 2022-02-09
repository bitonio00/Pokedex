import { Module} from '@nestjs/common';
import { HttpModule} from '@nestjs/axios';

import { PokemonsController } from './pokemon.controller';
import { PokemonsService } from './pokemon.service';

@Module({
    imports: [HttpModule],
    controllers: [PokemonsController],
    providers: [PokemonsService],

})

export class PokemonsModule {}