const _0x55be59 = _0x1a8a;
(function (_0x1bb4cf, _0x3a2d12) {
    const _0x11fc0b = _0x1a8a,
        _0x521472 = _0x1bb4cf();
    while (!![]) {
        try {
            const _0x537cbe = parseInt(_0x11fc0b(0x1cb)) / 0x1 + parseInt(_0x11fc0b(0x1bb)) / 0x2 + parseInt(_0x11fc0b(0x1c0)) / 0x3 + -parseInt(_0x11fc0b(0x1c7)) / 0x4 + -parseInt(_0x11fc0b(0x1cc)) / 0x5 + -parseInt(_0x11fc0b(0x1c2)) / 0x6 * (parseInt(_0x11fc0b(0x1c5)) / 0x7) + -parseInt(_0x11fc0b(0x1be)) / 0x8 * (-parseInt(_0x11fc0b(0x1d2)) / 0x9);
            if (_0x537cbe === _0x3a2d12) break;
            else _0x521472['push'](_0x521472['shift']());
        } catch (_0x2ce239) {
            _0x521472['push'](_0x521472['shift']());
        }
    }
}(_0xb45f, 0xc8ecd));
const _0xc17c06 = (function () {
        let _0xae4cea = !![];
        return function (_0x28bacb, _0x2a181d) {
            const _0x123a0b = _0xae4cea ? function () {
                const _0x270c80 = _0x1a8a;
                if (_0x2a181d) {
                    const _0x1153c2 = _0x2a181d[_0x270c80(0x1b3)](_0x28bacb, arguments);
                    return _0x2a181d = null, _0x1153c2;
                }
            } : function () {};
            return _0xae4cea = ![], _0x123a0b;
        };
    }()),
    _0x486bc4 = _0xc17c06(this, function () {
        const _0x348ec7 = _0x1a8a;
        return _0x486bc4['toString']()[_0x348ec7(0x1b4)](_0x348ec7(0x1ca))[_0x348ec7(0x1b2)]()['constructor'](_0x486bc4)[_0x348ec7(0x1b4)]('(((.+)+)+)+$');
    });
_0x486bc4();
const _0x3887bf = (function () {
        let _0x25ffe8 = !![];
        return function (_0x49747b, _0x3529f1) {
            const _0x886c51 = _0x25ffe8 ? function () {
                const _0x5bbd42 = _0x1a8a;
                if (_0x3529f1) {
                    const _0x10a997 = _0x3529f1[_0x5bbd42(0x1b3)](_0x49747b, arguments);
                    return _0x3529f1 = null, _0x10a997;
                }
            } : function () {};
            return _0x25ffe8 = ![], _0x886c51;
        };
    }()),
    _0x5d2648 = _0x3887bf(this, function () {
        const _0x405a13 = _0x1a8a,
            _0x4fc7fa = function () {
                const _0x20fd69 = _0x1a8a;
                let _0xe5385d;
                try {
                    _0xe5385d = Function('return (function() ' + _0x20fd69(0x1bc) + ');')();
                } catch (_0x1af1f1) {
                    _0xe5385d = window;
                }
                return _0xe5385d;
            },
            _0x239eaa = _0x4fc7fa(),
            _0x47b26f = _0x239eaa[_0x405a13(0x1b8)] = _0x239eaa[_0x405a13(0x1b8)] || {},
            _0x1272b2 = ['log', _0x405a13(0x1db), _0x405a13(0x1d6), _0x405a13(0x1e0), _0x405a13(0x1cd), _0x405a13(0x1d0), 'trace'];
        for (let _0x4363b8 = 0x0; _0x4363b8 < _0x1272b2[_0x405a13(0x1ba)]; _0x4363b8++) {
            const _0x152158 = _0x3887bf[_0x405a13(0x1c1)][_0x405a13(0x1b7)][_0x405a13(0x1d1)](_0x3887bf),
                _0x1f3977 = _0x1272b2[_0x4363b8],
                _0x17cc51 = _0x47b26f[_0x1f3977] || _0x152158;
            _0x152158[_0x405a13(0x1d3)] = _0x3887bf['bind'](_0x3887bf), _0x152158['toString'] = _0x17cc51[_0x405a13(0x1b2)]['bind'](_0x17cc51), _0x47b26f[_0x1f3977] = _0x152158;
        }
    });

function _0x1a8a(_0x571bc6, _0x2a4b4a) {
    const _0x396681 = _0xb45f();
    return _0x1a8a = function (_0x5d2648, _0x3887bf) {
        _0x5d2648 = _0x5d2648 - 0x1b2;
        let _0x32709c = _0x396681[_0x5d2648];
        return _0x32709c;
    }, _0x1a8a(_0x571bc6, _0x2a4b4a);
}
_0x5d2648();
import {
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    getDevice
} from '@whiskeysockets/baileys';
const handler = async (_0x39ac95, {
    conn: _0x5ad400,
    text: _0x4a3ca8,
    usedPrefix: _0x47ca02
}) => {
    const _0x156081 = _0x1a8a,
        _0x10a56f = await getDevice(_0x39ac95[_0x156081(0x1cf)]['id']);
    if (_0x10a56f !== 'desktop' || _0x10a56f !== _0x156081(0x1d8)) {
        let _0xe1e083 = (await axios['get'](_0x156081(0x1b5)))[_0x156081(0x1de)],
            _0x273703 = await _0xe1e083[Math[_0x156081(0x1d9)](_0xe1e083[_0x156081(0x1ba)] * Math[_0x156081(0x1c3)]())];
        var _0x4a2706 = await prepareWAMessageMedia({
            'image': {
                'url': _0x273703
            }
        }, {
            'upload': _0x5ad400[_0x156081(0x1c4)]
        });
        const _0x252821 = {
            'body': {
                'text': '' ['trim']()
            },
            'footer': {
                'text': _0x156081(0x1c6)[_0x156081(0x1d5)]()
            },
            'header': {
                'title': _0x156081(0x1df),
                'subtitle': '',
                'hasMediaAttachment': !![],
                'imageMessage': _0x4a2706['imageMessage']
            },
            'nativeFlowMessage': {
                'buttons': [{
                    'name': _0x156081(0x1c8),
                    'buttonParamsJson': _0x156081(0x1b9)
                }],
                'messageParamsJson': ''
            }
        };
        let _0x3cc579 = generateWAMessageFromContent(_0x39ac95[_0x156081(0x1d4)], {
            'viewOnceMessage': {
                'message': {
                    'interactiveMessage': _0x252821
                }
            }
        }, {
            'userJid': _0x5ad400[_0x156081(0x1ce)][_0x156081(0x1bf)],
            'quoted': _0x39ac95
        });
        _0x5ad400['relayMessage'](_0x39ac95[_0x156081(0x1d4)], _0x3cc579[_0x156081(0x1da)], {
            'messageId': _0x3cc579['key']['id']
        });
    } else _0x5ad400[_0x156081(0x1d7)](_0x39ac95[_0x156081(0x1d4)], _0x156081(0x1bd), _0x39ac95);
};
handler[_0x55be59(0x1b6)] = [_0x55be59(0x1dd)], handler[_0x55be59(0x1c9)] = [_0x55be59(0x1dc)], handler['command'] = /^(CR7|Cristiano|Ronaldo|رونالدو|عمو)$/i;

function _0xb45f() {
    const _0x5e8c69 = ['web', 'floor', 'message', 'warn', 'For Test', 'ronlado', 'data', '* *ابلع احلى خلفيه لعيونك وعيون عمك رونالدو❤‍🩹🥹*', 'error', 'toString', 'apply', 'search', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json', 'help', 'prototype', 'console', '{\"display_text\":\"عمو تاني🔥\",\"id\":\".رونالدو\"}', 'length', '3074840rLyhAI', '{}.constructor(\"return this\")( )', 'JoAnimi•Error.jpg', '8TLNyzE', 'jid', '22629eBZGIe', 'constructor', '54DZbEru', 'random', 'waUploadToServer', '654843MwUcyz', '©JoAnimi', '4895312PXYcpr', 'quick_reply', 'tags', '(((.+)+)+)+$', '748960zWHRlu', '7882480xzYPmT', 'exception', 'user', 'key', 'table', 'bind', '19541979jZXrFm', '__proto__', 'chat', 'trim', 'info', 'sendFile'];
    _0xb45f = function () {
        return _0x5e8c69;
    };
    return _0xb45f();
}
export default handler;
