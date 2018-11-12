var PasswordTester = {
    setup: function() {
        this.minLength = 6;
        this.requireStrong = !1;
        this.username = '';
        this.bannedPasswords = [
            '000000',
            '111111',
            '11111111',
            '112233',
            '121212',
            '123123',
            '123456',
            '1234567',
            '12345678',
            '123456789',
            '131313',
            '232323',
            '654321',
            '666666',
            '696969',
            '777777',
            '7777777',
            '8675309',
            '987654',
            'aaaaaa',
            'abc123',
            'abcdef',
            'abgrtyu',
            'access',
            'access14',
            'action',
            'albert',
            'alberto',
            'alexis',
            'alejandra',
            'alejandro',
            'amanda',
            'amateur',
            'america',
            'andrea',
            'andrew',
            'angela',
            'angels',
            'animal',
            'anthony',
            'apollo',
            'apples',
            'arsenal',
            'arthur',
            'asdfgh',
            'ashley',
            'asshole',
            'august',
            'austin',
            'badboy',
            'bailey',
            'banana',
            'barney',
            'baseball',
            'batman',
            'beatriz',
            'beaver',
            'beavis',
            'bigcock',
            'bigdaddy',
            'bigdick',
            'bigdog',
            'bigtits',
            'birdie',
            'bitches',
            'biteme',
            'blazer',
            'blonde',
            'blondes',
            'blowjob',
            'blowme',
            'bond007',
            'bonita',
            'bonnie',
            'booboo',
            'booger',
            'boomer',
            'boston',
            'brandon',
            'brandy',
            'braves',
            'brazil',
            'bronco',
            'broncos',
            'bulldog',
            'buster',
            'butter',
            'butthead',
            'calvin',
            'camaro',
            'cameron',
            'canada',
            'captain',
            'carlos',
            'carter',
            'casper',
            'charles',
            'charlie',
            'cheese',
            'chelsea',
            'chester',
            'chicago',
            'chicken',
            'cocacola',
            'coffee',
            'college',
            'compaq',
            'computer',
            'consumer',
            'cookie',
            'cooper',
            'corvette',
            'cowboy',
            'cowboys',
            'crystal',
            'cumming',
            'cumshot',
            'dakota',
            'dallas',
            'daniel',
            'danielle',
            'debbie',
            'dennis',
            'diablo',
            'diamond',
            'doctor',
            'doggie',
            'dolphin',
            'dolphins',
            'donald',
            'dragon',
            'dreams',
            'driver',
            'eagle1',
            'eagles',
            'edward',
            'einstein',
            'erotic',
            'estrella',
            'extreme',
            'falcon',
            'fender',
            'ferrari',
            'firebird',
            'fishing',
            'florida',
            'flower',
            'flyers',
            'football',
            'forever',
            'freddy',
            'freedom',
            'fucked',
            'fucker',
            'fucking',
            'fuckme',
            'fuckyou',
            'gandalf',
            'gateway',
            'gators',
            'gemini',
            'george',
            'giants',
            'ginger',
            'gizmodo',
            'golden',
            'golfer',
            'gordon',
            'gregory',
            'guitar',
            'gunner',
            'hammer',
            'hannah',
            'hardcore',
            'harley',
            'heather',
            'helpme',
            'hentai',
            'hockey',
            'hooters',
            'horney',
            'hotdog',
            'hunter',
            'hunting',
            'iceman',
            'iloveyou',
            'internet',
            'iwantu',
            'jackie',
            'jackson',
            'jaguar',
            'jasmine',
            'jasper',
            'jennifer',
            'jeremy',
            'jessica',
            'johnny',
            'johnson',
            'jordan',
            'joseph',
            'joshua',
            'junior',
            'justin',
            'killer',
            'knight',
            'ladies',
            'lakers',
            'lauren',
            'leather',
            'legend',
            'letmein',
            'little',
            'london',
            'lovers',
            'maddog',
            'madison',
            'maggie',
            'magnum',
            'marine',
            'mariposa',
            'marlboro',
            'martin',
            'marvin',
            'master',
            'matrix',
            'matthew',
            'maverick',
            'maxwell',
            'melissa',
            'member',
            'mercedes',
            'merlin',
            'michael',
            'michelle',
            'mickey',
            'midnight',
            'miller',
            'mistress',
            'monica',
            'monkey',
            'monster',
            'morgan',
            'mother',
            'mountain',
            'muffin',
            'murphy',
            'mustang',
            'naked',
            'nascar',
            'nathan',
            'naughty',
            'ncc1701',
            'newyork',
            'nicholas',
            'nicole',
            'nipple',
            'nipples',
            'oliver',
            'orange',
            'packers',
            'panther',
            'panties',
            'parker',
            'password',
            'password1',
            'password12',
            'password123',
            'patrick',
            'peaches',
            'peanut',
            'pepper',
            'phantom',
            'phoenix',
            'player',
            'please',
            'pookie',
            'porsche',
            'prince',
            'princess',
            'private',
            'purple',
            'pussies',
            'qazwsx',
            'qwerty',
            'qwertyui',
            'rabbit',
            'rachel',
            'racing',
            'raiders',
            'rainbow',
            'ranger',
            'rangers',
            'rebecca',
            'redskins',
            'redsox',
            'redwings',
            'richard',
            'robert',
            'roberto',
            'rocket',
            'rosebud',
            'runner',
            'rush2112',
            'russia',
            'samantha',
            'sammy',
            'samson',
            'sandra',
            'saturn',
            'scooby',
            'scooter',
            'scorpio',
            'scorpion',
            'sebastian',
            'secret',
            'sexsex',
            'shadow',
            'shannon',
            'shaved',
            'sierra',
            'silver',
            'skippy',
            'slayer',
            'smokey',
            'snoopy',
            'soccer',
            'sophie',
            'spanky',
            'sparky',
            'spider',
            'squirt',
            'srinivas',
            'startrek',
            'starwars',
            'steelers',
            'steven',
            'sticky',
            'stupid',
            'success',
            'suckit',
            'summer',
            'sunshine',
            'superman',
            'surfer',
            'swimming',
            'sydney',
            'tequiero',
            'taylor',
            'tennis',
            'teresa',
            'tester',
            'testing',
            'theman',
            'thomas',
            'thunder',
            'thx1138',
            'tiffany',
            'tigers',
            'tigger',
            'tomcat',
            'topgun',
            'toyota',
            'travis',
            'trouble',
            'trustno1',
            'tucker',
            'turtle',
            'twitter',
            'united',
            'vagina',
            'victor',
            'victoria',
            'viking',
            'voodoo',
            'voyager',
            'walter',
            'warrior',
            'welcome',
            'whatever',
            'william',
            'willie',
            'wilson',
            'winner',
            'winston',
            'winter',
            'wizard',
            'xavier',
            'xxxxxx',
            'xxxxxxxx',
            'yamaha',
            'yankee',
            'yankees',
            'yellow',
            'zxcvbn',
            'zxcvbnm',
            'zzzzzz',
            'covfefe'
        ]
    },
    main: function (e) {
        function s(e, t) {
            return t && e.toLowerCase() === ('' + t).toLowerCase()
        }

        function n() {
            return {
                score: 0,
                message: 'Too Obvious',
                reason: 'obvious'
            }
        }

        function a(e, t) {
            for (var i = '', s = 0; s < t.length; s++) {
                var o = !0,
                    n = void 0;
                for (n = 0; n < e && n + s + e < t.length; n++) o = o && t.charAt(n + s) === t.charAt(n + s + e);
                n < e && (o = !1),
                    o ? (s += e - 1, o = !1) : i += t.charAt(s)
            }
            return i
        }
        var r = 0;
        if (e.length < this.minLength) return {
            score: e.length,
            message: 'Too Short',
            reason: 'tooshort'
        };
    //   if (s(e, t)) return n();
    //   if (s(e, i)) return n();
        //if (this.bannedPasswords.indexOf(e.toLowerCase()) > -1) return n();
        if (this.requireStrong) {
            var c = '# ` ~ ! @ $ % ^ & * ( ) - _ = + [ ] { } \\ | ; : \' " , . < > / ?'.split(' ');
            c = c.map(function (e) {
                return '\\' + e
            }).join('');
            var l = [
                    '\\d',
                    '[a-z]',
                    '[A-Z]',
                    '[' + c + ']'
                ],
                d = l.map(function (e) {
                    return '(?=.*' + e + ')'
                }).join('');
            if (!e.match(new RegExp('(' + d + '){10,}'))) return {
                score: 0,
                message: 'Too Weak',
                reason: 'tooweak'
            }
        }
        return r += 4 * e.length,
            r += 1 * (a(1, e).length - e.length),
            r += 1 * (a(2, e).length - e.length),
            r += 1 * (a(3, e).length - e.length),
            r += 1 * (a(4, e).length - e.length),
            e.match(/(.*[0-9].*[0-9].*[0-9])/) && (r += 5),
            e.match(/(.*[!@#$%^&*?_~].*[!@#$%^&*?_~])/) && (r += 5),
            e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (r += 10),
            e.match(/([a-zA-Z])/) && e.match(/([0-9])/) && (r += 15),
            e.match(/([!@#$%^&*?_~])/) && e.match(/([0-9])/) && (r += 15),
            e.match(/([!@#$%^&*?_~])/) && e.match(/([a-zA-Z])/) && (r += 15),
            (e.match(/^\w+$/) || e.match(/^\d+$/)) && (r -= 10),
            r < 0 && (r = 0),
            r > 100 && (r = 100),
            r < 34 ? {
                score: r,
                message: 'Weak',
                reason: 'weak'
            } :
            r < 50 ? {
                score: r,
                message: 'Good',
                reason: 'good'
            } :
            r < 75 ? {
                score: r,
                message: 'Strong',
                reason: 'strong'
            } :
            {
                score: r,
                message: 'Very Strong',
                reason: 'verystrong'
            }
    },
    undoBannedPasswordROT13: function () {
        for (var e = [], t = 0, i = this.bannedPasswords.length; t < i; t++) e.push(this.bannedPasswords[t].replace(/[a-z]/gi, function (e) {
            var t = e.charCodeAt(0),
                i = t + 13;
            return (t <= 90 && i > 90 || i > 122) && (i -= 26),
                String.fromCharCode(i)
        }));
        this.bannedPasswords = e
    },
    after: function () {
        this.bannedPasswords.length && undoBannedPasswordROT13()
    }
}

var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'all_passwords.txt');

fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
        var pws = data.split("\n");
        for (var i = 0; i < pws.length; i++){
            result = PasswordTester.main(pws[i]);
            console.log(pws[i] + ', ' + result.score + ', ' + result.message);
        }
    } else {
        console.log(err);
    }
});