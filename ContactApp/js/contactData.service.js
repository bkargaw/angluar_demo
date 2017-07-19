(function () {
  let app = angular.module('ContactApp')
  app.service('contactDataSrv', function() {
      this.contacts = [
        {
          gender: "male",
          name: {
            title: "mr",
            first: "میلاد",
            last: "پارسا"
          },
          location: {
            street: "5561 شهید گلپایگانی",
            city: "ساری",
            state: "گیلان",
            postcode: 53404
          },
          email: "میلاد.پارسا@example.com",
          login: {
            username: "redswan510",
            password: "blacky",
            salt: "lPyN883j",
            md5: "c4e45a16c4225494db3f5075a0c9dff1",
            sha1: "3ffdb96e55c7eb518574c34ee863c065b3708751",
            sha256: "3ea9116a9b08056ee3e6fbb4605a92ce978b036f0ef72e69e17a46ef1b391618"
          },
          dob: "1992-11-13 19:13:57",
          registered: "2010-12-03 03:01:47",
          phone: "082-87617156",
          cell: "0998-315-8833",
          id: {
            name: "",
            value: null
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/84.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg"
          },
          nat: "IR"
        },
        {
          gender: "male",
          name: {
            title: "mr",
            first: "liam",
            last: "roy"
          },
          location: {
            street: "7312 9th st",
            city: "maitland",
            state: "prince edward island",
            postcode: 54313
          },
          email: "liam.roy@example.com",
          login: {
            username: "blueduck344",
            password: "umbrella",
            salt: "S1G3AxMt",
            md5: "cbe912a127e70e2066b0dfa64b7047bf",
            sha1: "1685181901b705e9eb512ac6932c437571173803",
            sha256: "5531e1ebd6bed3b3ebee02193406ed4b8c1f538ca6e1bfa6d4f317ab20ae93b9"
          },
          dob: "1988-09-27 05:22:45",
          registered: "2010-06-06 16:20:49",
          phone: "573-295-7593",
          cell: "581-056-9745",
          id: {
            name: "",
            value: null
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/34.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg"
          },
          nat: "CA"
        },
        {
          gender: "male",
          name: {
            title: "mr",
            first: "bessel",
            last: "droste"
          },
          location: {
            street: "9801 loeff berchmakerstraat",
            city: "nissewaard",
            state: "noord-brabant",
            postcode: 17073
          },
          email: "bessel.droste@example.com",
          login: {
            username: "purpledog581",
            password: "cottage",
            salt: "uCUmktKY",
            md5: "e9f0122123f3b8491abc261efdade187",
            sha1: "0bc3e5c3d9edd02bfdffbebb5cb9806f28518405",
            sha256: "2ecdd77d5c609e1f33bdd9ae75eda668bfa255079f153531ccf61f5fa00744aa"
          },
          dob: "1973-12-25 00:21:17",
          registered: "2012-07-22 01:06:06",
          phone: "(965)-108-4240",
          cell: "(139)-551-0541",
          id: {
            name: "BSN",
            value: "84845779"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/52.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/52.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/52.jpg"
          },
          nat: "NL"
        },
        {
          gender: "male",
          name: {
            title: "mr",
            first: "arthur",
            last: "held"
          },
          location: {
            street: "4254 waldweg",
            city: "bamberg",
            state: "berlin",
            postcode: 95186
          },
          email: "arthur.held@example.com",
          login: {
            username: "brownmouse230",
            password: "dave",
            salt: "dV2EwHZV",
            md5: "d7ae2f29eaa15178bd93dfd46a12804f",
            sha1: "ca9694b508b3925036ed0e8edfbdd206a8f26c92",
            sha256: "e162cea8cfe633fbd1e3db601b18a7e82c9eb4f340f581cf1f9935751930683e"
          },
          dob: "1968-10-13 23:47:24",
          registered: "2015-08-04 12:52:31",
          phone: "0303-9836509",
          cell: "0177-7878367",
          id: {
            name: "",
            value: null
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/92.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg"
          },
          nat: "DE"
        },
        {
          gender: "female",
          name: {
            title: "mrs",
            first: "valentina",
            last: "gonzalez"
          },
          location: {
            street: "6367 rue du moulin",
            city: "versailles",
            state: "haute-savoie",
            postcode: 99184
          },
          email: "valentina.gonzalez@example.com",
          login: {
            username: "greencat751",
            password: "groucho",
            salt: "PhinW9Kj",
            md5: "02cb47e2967046329f91873c2db9212a",
            sha1: "7b5f24cf9c4f36587ba899d7e621a09eeb03428c",
            sha256: "7e5415eb7b73c643e9887e81fda3552518fbe4e5482b7862055f346eabd20264"
          },
          dob: "1958-05-02 14:11:36",
          registered: "2004-09-08 20:46:02",
          phone: "04-79-36-68-81",
          cell: "06-94-36-58-74",
          id: {
            name: "INSEE",
            value: "258444648915 41"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/4.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg"
          },
          nat: "FR"
        },
        {
          gender: "female",
          name: {
            title: "mrs",
            first: "tiffany",
            last: "bradley"
          },
          location: {
            street: "1137 spring hill rd",
            city: "elk grove",
            state: "washington",
            postcode: 34489
          },
          email: "tiffany.bradley@example.com",
          login: {
            username: "silverduck943",
            password: "dennis",
            salt: "Ix0FwbJ4",
            md5: "63b4656d532957b88e15bc19cb6ec6e8",
            sha1: "d393f871187aeadd1c05d716c54f2fa3735e03d6",
            sha256: "685e023eda5be779985386a54b5e2616e3efb796ce8efeea35d8ceb3401a4abc"
          },
          dob: "1963-02-26 00:57:29",
          registered: "2005-09-25 16:05:29",
          phone: "(445)-843-0562",
          cell: "(499)-235-2747",
          id: {
            name: "SSN",
            value: "074-58-8702"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/30.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/30.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/30.jpg"
          },
          nat: "US"
        },
        {
          gender: "male",
          name: {
            title: "mr",
            first: "ian",
            last: "lopez"
          },
          location: {
            street: "4596 springfield road",
            city: "salford",
            state: "rutland",
            postcode: "V72 9HG"
          },
          email: "ian.lopez@example.com",
          login: {
            username: "redpanda152",
            password: "roxanne",
            salt: "7VG5rXLj",
            md5: "b8f3f6e3e464c4c9adcd4c351eccafa9",
            sha1: "109fd45ac5a0c7e4891aaeebfb9899d3afabe4b5",
            sha256: "48d6e296acfaabd2ec3b44884bca49ded4d08e73e573c06a0c9f73df24e6f59e"
          },
          dob: "1959-06-24 03:16:48",
          registered: "2007-12-25 04:38:20",
          phone: "016977 68011",
          cell: "0748-326-001",
          id: {
            name: "NINO",
            value: "MR 68 13 09 G"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/10.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/10.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/10.jpg"
          },
          nat: "GB"
        },
        {
          gender: "female",
          name: {
            title: "miss",
            first: "scarlett",
            last: "oliver"
          },
          location: {
            street: "6513 park avenue",
            city: "peterborough",
            state: "rutland",
            postcode: "Q50 8ZJ"
          },
          email: "scarlett.oliver@example.com",
          login: {
            username: "bigduck138",
            password: "redleg",
            salt: "nnIjLprX",
            md5: "a99f43fb846ebf2eb4c6769b8e1c4d47",
            sha1: "7aff7fc8271c3210f902cb39e166e88996d5ce15",
            sha256: "9a07f7d3c8ee9a8ae566564763b4d76565557bfc4e73e7caad4f39a15514276c"
          },
          dob: "1944-10-25 10:06:13",
          registered: "2014-08-01 07:52:41",
          phone: "01487 132507",
          cell: "0799-274-072",
          id: {
            name: "NINO",
            value: "AE 86 75 12 E"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/84.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/84.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/84.jpg"
          },
          nat: "GB"
        },
        {
          gender: "male",
          name: {
            title: "mr",
            first: "andreas",
            last: "gebhardt"
          },
          location: {
            street: "8501 birkenweg",
            city: "nürnberger land",
            state: "nordrhein-westfalen",
            postcode: 97515
          },
          email: "andreas.gebhardt@example.com",
          login: {
            username: "heavykoala199",
            password: "sunny1",
            salt: "yTlsrA7o",
            md5: "626d55ed5a162fcc554cef734bfad94a",
            sha1: "e151530ecccdd0c557aeb0071fc82b31577fc178",
            sha256: "d5c31612e6bd61135cf5f01fcc6af13b342f56f77abe531b08dd663ce529c69c"
          },
          dob: "1991-12-08 02:15:39",
          registered: "2016-06-17 11:57:12",
          phone: "0583-1983744",
          cell: "0178-4977801",
          id: {
            name: "",
            value: null
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/69.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/69.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/69.jpg"
          },
          nat: "DE"
        },
        {
          gender: "male",
          name: {
            title: "mr",
            first: "job",
            last: "almeida"
          },
          location: {
            street: "8000 rua vinte de setembro",
            city: "francisco morato",
            state: "acre",
            postcode: 75557
          },
          email: "job.almeida@example.com",
          login: {
            username: "ticklishcat412",
            password: "access",
            salt: "W5y0Cj2n",
            md5: "4da09c20d0b83b3ec0ebe76db822a2d0",
            sha1: "1bcc967da2e39b184579de03a4970a26d873b4a6",
            sha256: "a0aa00bce05fd2e8559fe154bb4edff4990dc7a7bb260278287d2b6ca654d21e"
          },
          dob: "1972-07-14 18:27:54",
          registered: "2015-06-20 07:21:22",
          phone: "(67) 1709-7924",
          cell: "(15) 5197-4428",
          id: {
            name: "",
            value: null
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/0.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/0.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/0.jpg"
          },
          nat: "BR"
        }
      ]
  })
})()
