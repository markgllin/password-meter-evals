var PasswordTester = {
    setup: function() {
        this.minLength = 6;
        this.requireStrong = !1;
        this.username = '';
        this.bannedPasswords = []
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