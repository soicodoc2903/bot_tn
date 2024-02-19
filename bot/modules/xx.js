import {chat, pmCbox, getTcvNameFromTcvId} from '../helper.js';

export const dice = async (tcvId, fromName) => {
    const xx1 = Math.floor(1 + Math.random()*(6));
    const xx2 = Math.floor(1 + Math.random()*(6));
    const xx3 = Math.floor(1 + Math.random()*(6));
    const result = xx1 + xx2 + xx3;
    chat(`${xx1} + ${xx2} + ${xx3} [img]https://i.imgur.com/RMbC5Cf.gif[/img] ${fromName} đổ xúc xắc được ${result} điểm.`);
}

