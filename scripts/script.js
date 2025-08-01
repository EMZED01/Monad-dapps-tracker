
const dappGrid = document.getElementById('dapp-grid');
const submitBtn = document.getElementById('submitBtn');
const resultDiv = document.getElementById('result');

const dapps = ['Accountable', 'Acurast', 'Ambient', 'Amertis', 'Ammalgam', 'Anima', 'ApeBond', 'Apriori', 'Atlantis', 'AUSD', 'Azaar', 'AZEx', 'Balancer', 'Bean Exchange', 'Bebop', 'Bima', 'Blazpay', 'Blocklive', 'Caddy Finance', 'Castora', 'Catton AI', 'Chaquen', 'Clober', 'Codatta', 'CoNFT', 'Covenant', 'Crust Finance', 'Crystal', 'Curvance', 'DAU Cards', 'Defx', 'Demask Finance', 'Dirol Protocol', 'DiscoCats', 'DRKVRS', 'Dusted', 'Fantasy Top', 'FastLane', 'Fizen.io', 'Flap', 'Folks Finance', 'Fortytwo', 'Fufuture', 'FUKU', 'Gasp', 'Gifted.art', 'Golden Goose', 'Griffy', 'Hashflow', 'Hawk Terminal', 'Hedgemony', 'Hive', 'Impossible Finance', 'INFINIT', 'IZUMi Finance', 'KiloEx', 'Kintsu', 'Kinza Finance', 'Kizzy', 'Kuru', 'Legends of Elysium', 'LEVR.bet', 'LFJ', 'LootGO', 'Lootify', 'Mace', 'Madness Exchange', 'Mach Exchange', 'Magic Eden', 'Magma', 'Mahjong123', 'MERV', 'Meta Leap', 'Mintpad', 'Monadata AI', 'Monda', 'Monorail', 'Moseiki', 'Mozi', 'Mu Digital', 'Multipli.fi', 'Nabla Finance', 'Nad.fun', 'NadSmith', 'Narwhal Finance', 'Nextmate.AI', 'NFTs2Me', 'NitroFinance', 'Nostra', 'O.LAB', 'OctoSwap', 'Odyssey', 'Opals', 'OpenOcean', 'OpenSea', 'Orderly', 'Outpost Surge', 'Owlto Finance', 'Own.fun', 'PancakeSwap', 'Pingu Exchange', 'Plato', 'PLAY Network', 'Poply', 'Primex Finance', 'Proof-of-Skill', 'PumpBTC', 'Rabble', 'RareBetSports', 'Redbrick', 'Renzo', 'Rubic', 'Rug Rumble', 'Rysk', 'Showdown', 'Sidekick', 'SkyTrade', 'Slogain', 'Solv Protocol', 'Spine Finance', 'Stargate', 'Sumer', 'Swaap', 'SynFutures', 'Synnax', 'Tadle', 'Talentum', 'The Vape Labs', 'Timeswap', 'Tread.fi', 'Uniswap', 'XL', 'YieldKingZ', 'Zapry', 'Zaros', 'Zona', 'Flappy Trump', 'Garden'];

dapps.forEach(name => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerText = name;
  div.onclick = () => div.classList.toggle('selected');
  dappGrid.appendChild(div);
});

submitBtn.onclick = async () => {
  const selected = Array.from(document.querySelectorAll('.card.selected')).map(c => c.innerText);
  resultDiv.innerHTML = `✅ You’ve explored <strong>${selected.length}</strong> out of <strong>${dapps.length}</strong> dApps.`;
  
  await fetch('/api/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ selected })
  });
};
