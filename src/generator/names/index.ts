
import * as AarakocraNames from './aarakocra.json';
import * as AasimarNames from './aasimar.json';
import * as ElfNames from './elf.json';
import * as AirGenasiNames from './genasi-air.json';
import * as EarthGenasiNames from './genasi-earth.json';
import * as FireGenasiNames from './genasi-fire.json';
import * as WaterGenasiNames from './genasi-water.json';
import * as GnomeNames from './gnome.json';
import * as GoblinNames from './goblin.json';
import * as GoliathNames from './goliath.json';
import * as HalflingNames from './halfling.json';
import * as HumanNames from './human.json';
import * as OrcNames from './human.json';
import * as KenkuNames from './kenku.json';
import * as KoboldNames from './kobold.json';
import * as LizardfolkNames from './lizardfolk.json';
import * as TabaxiNames from './tabaxi.json';

export const NameDefinitions: { [key: string]: any[] } = {
  'Aarakocra': [AarakocraNames],
  'Aasimar': [AasimarNames],
  'Bugbear': [GoblinNames],
  'Elf': [ElfNames],
  'Air Genasi': [AirGenasiNames],
  'Earth Genasi': [EarthGenasiNames],
  'Fire Genasi': [FireGenasiNames],
  'Genasi': [AirGenasiNames, EarthGenasiNames, FireGenasiNames, WaterGenasiNames],
  'Gnome': [GnomeNames],
  'Goblin': [GoblinNames],
  'Goliath': [GoliathNames],
  'Half-Elf': [ElfNames, HumanNames],
  'Half-Orc': [OrcNames, HumanNames],
  'Halfling': [HalflingNames],
  'Hobgoblin': [GoblinNames],
  'Human': [HumanNames],
  'Kenku': [KenkuNames],
  'Kobold': [KoboldNames],
  'Lizardfolk': [LizardfolkNames],
  'Orc': [OrcNames],
  'Tabaxi': [TabaxiNames],
  'Water Genasi': [WaterGenasiNames],
};