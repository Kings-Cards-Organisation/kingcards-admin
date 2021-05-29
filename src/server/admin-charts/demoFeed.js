import { colors, labels } from './chartParams'

const signupDataset = [{
    label: 'signups',
    ...colors[1],
    borderWidth: 0,
    data: [16, 25, 38, 48, 75, 85, 103, 92, 97]
}];

const withdrawalDataset = [{
    label: 'withdrawals',
    ...colors[2],
    borderWidth: 0,
    data: [12, 27, 32, 48, 50, 37, 32, 42]
}];

const tradesDataset = [{
    label: 'trades',
    ...colors[3],
    borderWidth: 0,
    data: [16, 50, 38, 45, 67, 85, 120, 93]
}];

const signinDataset = [{
    label: 'sign-ins',
    ...colors[1],
    borderWidth: 0,
    data: [126, 120, 138, 141, 137, 185, 193, 166, 191]
}];

const withdrawalVolumeDataset = [{
    label: 'withdrawal volume',
    ...colors[2],
    borderWidth: 0,
    data: [1280, 2740, 3220, 4810, 5190, 3780, 3250, 3420, 4095]
}];

const tradeVolumeDataset = [{
    label: 'trade volume',
    ...colors[2],
    borderWidth: 0,
    data: [1820, 2470, 3220, 4180, 5910, 3870, 3520, 4320, 4230]
}];

const signupData = {
    labels,
    datasets: signupDataset
};

const withdrawalData = {
    labels,
    datasets: withdrawalDataset
};

const tradesData = {
    labels,
    datasets: tradesDataset
};

const signinData = {
    labels,
    datasets: signinDataset
};

const withdrawalVolumeData = {
    labels,
    datasets: withdrawalVolumeDataset
};

const tradeVolumeData = {
    labels,
    datasets: tradeVolumeDataset
};

export {
  signupData,
  withdrawalData,
  tradesData,
  signinData,
  withdrawalVolumeData,
  tradeVolumeData,
}
