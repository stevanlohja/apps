// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

import { ROCOCO_GENESIS } from '../api/constants';
import { chainsT0rnPNG, chainsTinkerPNG, chainsTuringPNG, chainsVirtoPNG, chainsWatrPNG } from '../ui/logos/chains';
import { nodesAjunaPNG, nodesBasiliskRococoBgPNG, nodesBridgeHubBlackSVG, nodesStatemineSVG, nodesZeitgeistPNG } from '../ui/logos/nodes';
import { getTeleports } from './util';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testParasRococo: EndpointOption[] = [
  {
    info: 'rococoAcurast',
    paraId: 4191,
    providers: {
      Acurast: 'wss://ws.acurast-rococo.diamond.papers.tech'
    },
    text: 'Acurast Testnet',
    uiColor: '#000000'
  },
  {
    info: 'rococoAmplitude',
    paraId: 2124,
    providers: {
      PendulumChain: 'wss://rpc-foucoco.pendulumchain.tech'
    },
    text: 'Amplitude testnet (Foucoco)',
    uiColor: '#5DEFA7'
  },
  {
    info: 'arctic',
    paraId: 3015,
    providers: {
      Arctic: 'wss://arctic-rococo-rpc.icenetwork.io'
    },
    text: 'Arctic'
  },
  {
    homepage: 'https://www.aventus.io/',
    info: 'rococoAventus',
    paraId: 2056,
    providers: {},
    text: 'Aventus'
  },
  {
    info: 'rococoBajun',
    paraId: 2119,
    providers: {
      AjunaNetwork: 'wss://rpc-rococo.bajun.network'
    },
    text: 'Bajun Network',
    uiColor: '#161212',
    uiLogo: nodesAjunaPNG
  },
  {
    info: 'rococoBasilisk',
    paraId: 2090,
    providers: {
      'Galactic Council': 'wss://rococo-basilisk-rpc.hydration.dev'
    },
    text: 'Basilisk',
    uiColor: `url(${nodesBasiliskRococoBgPNG}) #000`
  },
  {
    info: 'rococoBifrost',
    paraId: 2030,
    providers: {
      Liebi: 'wss://bifrost-rpc.rococo.liebi.com/ws'
    },
    text: 'Bifrost'
  },
  {
    info: 'rococoBitgreen',
    paraId: 20048,
    providers: {
      Bitgreen: 'wss://staging.bitgreen.org'
    },
    text: 'Bitgreen',
    uiColor: '#224851'
  },
  {
    info: 'rococoCatalyst',
    paraId: 2031,
    providers: {
      Centrifuge: 'wss://fullnode.catalyst.cntrfg.com'
    },
    text: 'Catalyst'
  },
  {
    info: 'rococoConfti',
    paraId: 4094,
    providers: {
      // Confti: 'wss://ws.confti.club' // https://github.com/polkadot-js/apps/issues/8036
    },
    text: 'Confti'
  },
  {
    info: 'rococoCrust',
    paraId: 2012,
    providers: {
      Crust: 'wss://rococo-csm.crustcode.com/'
    },
    text: 'Crust Testnet'
  },
  {
    info: 'rococoDali',
    paraId: 2087,
    providers: {
      // Composable: 'wss://rpc.composablefinance.ninja' // https://github.com/polkadot-js/apps/issues/8867
    },
    text: 'Dali',
    uiColor: '#000000'
  },
  {
    info: 'rococoDolphin',
    paraId: 2084,
    providers: {
      'Manta Network': 'wss://ws.rococo.dolphin.engineering'
    },
    text: 'Dolphin'
  },
  {
    info: 'rococoEthos',
    paraId: 2095,
    providers: {
      Jur: 'wss://ethos.jur.io'
    },
    text: 'Ethos',
    uiColor: '#203050'
  },
  {
    info: 'rococoFrequency',
    paraId: 4044,
    providers: {
      Frequency: 'wss://rpc.rococo.frequency.xyz'
    },
    text: 'Frequency',
    uiColor: '#29fd47'
  },
  {
    info: 'rococoGenshiro',
    paraId: 2024,
    providers: {
      Equilibrium: 'wss://parachain-testnet.equilab.io/rococo/collator/node1/wss'
    },
    text: 'Genshiro Testnet'
  },
  {
    info: 'helixstreet',
    paraId: 3025,
    providers: {
      Helixstreet: 'wss://rpc-rococo.helixstreet.io'
    },
    text: 'Helixstreet'
  },
  {
    info: 'rococoHydraDX',
    paraId: 2034,
    providers: {
      'Galactic Council': 'wss://rococo-hydradx-rpc.hydration.dev'
    },
    text: 'HydraDX'
  },
  {
    info: 'rococoImbue',
    paraId: 2121,
    providers: {
      'Imbue Network': 'wss://rococo.imbue.network'
    },
    text: 'Imbue Network'
  },
  {
    info: 'rococoIntegritee',
    paraId: 3002,
    providers: {
      Integritee: 'wss://rococo.api.integritee.network'
    },
    text: 'Integritee Network'
  },
  {
    info: 'rococoKabocha',
    paraId: 2113,
    providers: {
      JelliedOwl: 'wss://kabsoup1.jelliedowl.com'
    },
    text: 'Kabocha (kabsoup)',
    uiColor: 'repeating-radial-gradient(black, black 4px, yellow 5px)'
  },
  {
    info: 'rococoLitentry',
    paraId: 2106,
    providers: {
      Litentry: 'wss://rpc.rococo-parachain-sg.litentry.io'
    },
    text: 'Litentry',
    uiColor: '#0a6a08'
  },
  {
    info: 'rococoMangata',
    paraId: 2110,
    providers: {
      Mangata: 'wss://roccoco-testnet-collator-01.mangatafinance.cloud'
    },
    text: 'Mangata',
    uiColor: '#030408'
  },
  {
    info: 'rococoMd5',
    paraId: 2089,
    providers: {
      'Hashed Systems': 'wss://c1.md5.network'
    },
    text: 'MD5 Network',
    uiColor: '#175bae'
  },
  {
    info: 'rococoMoonsama',
    paraId: 2055,
    providers: {
      // Moonsama: 'wss://moonsama-testnet-rpc.moonsama.com' // https://github.com/polkadot-js/apps/issues/7526
    },
    text: 'Moonsama',
    uiColor: '#000000'
  },
  {
    info: 'rococoNodle',
    paraId: 2026,
    providers: {
      OnFinality: 'wss://nodle-paradis.api.onfinality.io/public-ws'
    },
    text: 'Nodle',
    uiColor: '#1ab394'
  },
  {
    homepage: 'https://www.my-oli.com/en/',
    info: 'chainoli',
    paraId: 4023,
    providers: {},
    text: 'OLI'
  },
  {
    homepage: 'https://parachain.origintrail.io',
    info: 'rococoOriginTrailParachain',
    paraId: 2043,
    providers: {
      TraceLabs: 'wss://parachain-testnet-rpc.origin-trail.network/'
    },
    text: 'OriginTrail Testnet',
    uiColor: '#0C0C0C'
  },
  {
    info: 'rococoPangolin',
    paraId: 2105,
    providers: {
      'Darwinia Network': 'wss://pangolin-parachain-rpc.darwinia.network'
    },
    text: 'Pangolin'
  },
  {
    info: 'rococoKilt',
    paraId: 2086,
    providers: {
      'KILT Protocol': 'wss://rococo.kilt.io'
    },
    text: 'RILT',
    uiColor: 'linear-gradient(45deg, #8c145a 0%, #f05a27 100%)'
  },
  {
    homepage: 'http://robonomics.network/',
    info: 'robonomics',
    paraId: 2048,
    providers: {
      Airalab: 'wss://rococo.rpc.robonomics.network'
    },
    text: 'Robonomics'
  },
  {
    info: 'rocfinity',
    paraId: 2021,
    providers: {
      Efinity: 'wss://rpc.rococo.efinity.io'
    },
    text: 'Rocfinity',
    uiColor: '#496ddb'
  },
  {
    info: 'snowbridge',
    paraId: 3016,
    providers: {
      // Snowfork: 'wss://rococo-rpc.snowbridge.network' // https://github.com/polkadot-js/apps/issues/8723
    },
    text: 'Snowbridge'
  },
  {
    info: 'rococoSubsocial',
    paraId: 2100,
    providers: {
      DappForce: 'wss://rco-para.subsocial.network'
    },
    text: 'SoonsocialX'
  },
  {
    info: 'rococoSora',
    paraId: 2011,
    providers: {
      Soramitsu: 'wss://ws.parachain-collator-1.c1.stg1.sora2.soramitsu.co.jp'
    },
    text: 'SORA',
    uiColor: '#2D2926'
  },
  {
    info: 'rococoSpreehafen',
    paraId: 2116,
    providers: {
      DataHighway: 'wss://spreehafen.datahighway.com'
    },
    text: 'Spreehafen',
    uiColor: 'linear-gradient(-90deg, #9400D3 0%, #5A5CA9 50%, #00BFFF 100%)'
  },
  {
    homepage: 'https://totemaccounting.com/',
    info: 'stagex',
    paraId: 2007,
    providers: {
      Totem: 'wss://s-ui.kapex.network'
    },
    text: 'Stagex'
  },
  {
    info: 'rococoSubzero',
    paraId: 4040,
    providers: {
      ZERO: 'wss://staging.para.sub.zero.io'
    },
    text: 'Subzero'
  },
  {
    info: 't0rn',
    paraId: 3333,
    providers: {
      t3rn: 'wss://ws.t0rn.io'
    },
    text: 't0rn',
    uiColor: '#212322',
    uiLogo: chainsT0rnPNG
  },
  {
    info: 'tangle',
    paraId: 4006,
    providers: {
      Webb: 'wss://arana-alpha-1.webb.tools'
    },
    text: 'Tangle',
    uiColor: '#483d8b'
  },
  {
    info: 'rococoTinkernet',
    paraId: 2125,
    providers: {
      // 'InvArch Team': 'wss://rococo.invarch.network' // https://github.com/polkadot-js/apps/issues/8266
    },
    text: 'Tinkernet',
    uiColor: 'linear-gradient(90deg, rgba(253,52,166,1) 0%, rgba(22,213,239,1) 100%)',
    uiLogo: chainsTinkerPNG
  },
  {
    info: 'rococoTuring',
    paraId: 2114,
    providers: {
      OAK: 'wss://rpc.turing-staging.oak.tech'
    },
    text: 'Turing Network (Staging)',
    uiColor: '#A8278C',
    uiLogo: chainsTuringPNG
  },
  {
    info: 'rococoUnitNetwork',
    paraId: 4168,
    providers: {
      UnitNetwork: 'wss://www.unitnode3.info:443'
    },
    text: 'Unit Network'
  },
  {
    info: 'rococoVirto',
    paraId: 3003,
    providers: {
      // VirtoNetwork: 'wss://rococo.virtonetwork.xyz' // https://github.com/polkadot-js/apps/issues/8024
    },
    text: 'Virto',
    uiColor: '#063970',
    uiLogo: chainsVirtoPNG
  },
  {
    info: 'rococoWatr',
    paraId: 2058,
    providers: {
      Watr: 'wss://rpc.dev.watr.org'
    },
    text: 'Watr Network',
    uiColor: '#373b39',
    uiLogo: chainsWatrPNG
  },
  {
    info: 'rococoZeitgeist',
    paraId: 2101,
    providers: {
      Zeitgeist: 'wss://roc.zeitgeist.pm'
    },
    text: 'Zeitgeist Battery Station',
    uiColor: 'linear-gradient(180deg, rgba(32,90,172,1) 0%, rgba(26,72,138,1) 50%, rgba(13,36,69,1) 100%)',
    uiLogo: nodesZeitgeistPNG
  }
];

export const testParasRococoCommon: EndpointOption[] = [
  {
    info: 'rococoStatemint',
    paraId: 1000,
    providers: {
      Parity: 'wss://rococo-rockmine-rpc.polkadot.io'
    },
    teleport: [-1],
    text: 'Rockmine',
    uiColor: '#77bb77',
    uiLogo: nodesStatemineSVG
  },
  {
    info: 'rococoContracts',
    paraId: 1002,
    providers: {
      Parity: 'wss://rococo-contracts-rpc.polkadot.io'
    },
    teleport: [-1],
    text: 'Contracts',
    uiColor: '#000000'
  },
  {
    homepage: 'https://encointer.org/',
    info: 'encointer',
    paraId: 1003,
    providers: {
      'Encointer Association': 'wss://rococo.api.encointer.org'
    },
    teleport: [-1],
    text: 'Encointer Lietaer'
  },
  {
    info: 'rococoBridgehub',
    paraId: 1013,
    providers: {
      Parity: 'wss://rococo-bridge-hub-rpc.polkadot.io'
    },
    teleport: [-1],
    text: 'Bridgehub',
    uiLogo: nodesBridgeHubBlackSVG
  }
];

export const testRelayRococo: EndpointOption = {
  dnslink: 'rococo',
  genesisHash: ROCOCO_GENESIS,
  info: 'rococo',
  linked: [
    ...testParasRococoCommon,
    ...testParasRococo
  ],
  providers: {
    Parity: 'wss://rococo-rpc.polkadot.io',
    // OnFinality: 'wss://rococo.api.onfinality.io/public-ws', // After reset, node misses host functions
    // Pinknode: 'wss://rpc.pinknode.io/rococo/explorer' // After reset, syncs to old chain
    // 'Ares Protocol': 'wss://rococo.aresprotocol.com' // https://github.com/polkadot-js/apps/issues/5767
    'light client': 'light://substrate-connect/rococo'
  },
  teleport: getTeleports(testParasRococoCommon),
  text: 'Rococo',
  uiColor: '#6f36dc'
};
