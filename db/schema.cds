namespace golf;

using
{
  managed,
  Currency
} from '@sap/cds/common';

entity Rounds:managed
{
  @Common.Label : 'UUID'
  key ID        : UUID;
      title     : String(111);
      holes     : Composition of many Holes on holes.round = $self;
}

entity Holes
{
  @Common.Label   : 'UUID'
  key ID          : UUID;
      title       : String(111);
      score       : Integer;
      par         : Integer;
      round       : Association to Rounds;
      shots       : Composition of many Shots on shots.hole = $self;
      result      : String
}

entity Shots
{
  @Common.Label : 'UUID'
  key ID        : UUID;
      title     : String(111);
      hole      : Association to Holes;
}