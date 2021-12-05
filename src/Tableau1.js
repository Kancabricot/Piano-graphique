class Tableau1 extends Phaser.Scene {


    preload() {
        this.testflip = 0;
        //level
            // level 1-1
        this.load.image('level-1-1', 'assets/level/1-1.png')

        // enemie
            // goomba
        this.load.image('goomba-1', 'assets/enemie/goomba/goomba-1.png')
        this.load.image('goomba-2', 'assets/enemie/goomba/goomba-2.png')

            //coopa
        this.load.image('coopa-1', 'assets/enemie/Coopa/coopa-1.png')
        this.load.image('coopa-2', 'assets/enemie/Coopa/coopa-2.png')

            //coopa
        this.load.image('lakitu', 'assets/enemie/lakitu.png')

            //bill
        this.load.image('bill', 'assets/enemie/bill.png')
        this.load.image('bill-lanceur', 'assets/enemie/bill-lanceur.png')

            // tuyaux et plant
        this.load.image('tuyaux', 'assets/enemie/tuyaux.png')
        this.load.image('plant', 'assets/enemie/plant.png')

            // mario
        this.load.image('mario', 'assets/mario.png')

            // bowser
        this.load.image('bowser', 'assets/enemie/bowser.png')

            // bowser
        this.load.image('feu', 'assets/enemie/feu.png')

            // nuage
        this.load.image('nuage', 'assets/level/nuage.png')

            // note de musique
        for (let i = 1; i <= 9; i++) {
            this.load.image('n-'+ i, 'assets/note-musique/n-' + i + '.png');
        }

            // effet de grésillement
        for (let i = 1; i <= 4; i++) {
            this.load.image('g-'+ i, 'assets/gresillement/g-' + i + '.png');
        }

            // icon mute
        this.load.image('mute', 'assets/mute.png')

            // icon bouton reset
        this.load.image('reset', 'assets/bouton-reset.png')
    }

    create() {
        // level 1-1
        this.add.image(0, 0, 'level-1-1').setOrigin(0, 0);

        // nuage
        let nuage = this.add.image(200, 70, 'nuage').setOrigin(0, 0);


        // animation goomba
        this.goomba = this.add.sprite(-900, -85, 'goomba').setOrigin(0, 0);

        this.anims.create({
            key: 'goomba',
            frames: [
                {key: 'goomba-1'},
                {key: 'goomba-2'},
            ],
            frameRate: 4,
            repeat: -1
        });
        this.goomba.play('goomba');


        // animation coopa
        this.coopa = this.add.sprite(-350, -118, 'coopa').setOrigin(0, 0);

        this.anims.create({
            key: 'coopa',
            frames: [
                {key: 'coopa-1'},
                {key: 'coopa-2'},
            ],
            frameRate: 4,
            repeat: -1
        });
        this.coopa.play('coopa');


        // bill
        let bill = this.add.image(650, 300, 'bill').setOrigin(0, 0);
        bill.scale = 0.6

        // bill lanceur
        let billlanceur = this.add.image(680, 296, 'bill-lanceur').setOrigin(0, 0);
        billlanceur.scale = 3

        // plant
        let plant = this.add.image(150, 220, 'plant').setOrigin(0, 0);

        // tuyaux
        let tuyaux = this.add.image(165, 318, 'tuyaux').setOrigin(0, 0);

        // mario
        let mario = this.add.image(320, 225, 'mario').setOrigin(0, 0);
        mario.scale = 0.8

        // lakitu
        let lakitu = this.add.image(700, 50, 'lakitu').setOrigin(0, 0);

        // note de musique en animation
        this.note = this.add.sprite(0, 0, 'note').setOrigin(0, 0);
        this.anims.create({
            key: 'note',
            frames: this.getFrames("n-", 9),
            frameRate: 2,
            repeat: -1,
        });
        this.note.play('note');
        this.note.scale=0.1;

        // feu de bowser
        let feu = this.add.image(730, 310, 'feu').setOrigin(0, 0);
        feu.scale = 2

        // bowser
        let bowser = this.add.image(740, 250, 'bowser').setOrigin(0, 0);
        bowser.scale = 1.2

        // grésillement en animation haut 1
        let gresillement = this.gresillement = this.add.sprite(0, 0, 'gresillement').setOrigin(0, 0);
        this.anims.create({
            key: 'gresillement',
            frames: this.getFrames("g-", 4),
            frameRate: 16,
            repeat: -1,
        });
        this.gresillement.play('gresillement');
        this.gresillement.scale=1;

        // grésillement en animation haut 2
        let gresillement2 = this.gresillement2 = this.add.sprite(gresillement.x + gresillement.width, 0, 'gresillement2').setOrigin(0, 0);
        this.anims.create({
            key: 'gresillement2',
            frames: this.getFrames("g-", 4),
            frameRate: 16,
            repeat: -1,
        });
        this.gresillement2.play('gresillement2');
        this.gresillement2.scale=1;

        // grésillement en animation haut 3
        let gresillement3 = this.gresillement3 = this.add.sprite(gresillement2.x + gresillement2.width, 0, 'gresillement3').setOrigin(0, 0);
        this.anims.create({
            key: 'gresillement3',
            frames: this.getFrames("g-", 4),
            frameRate: 16,
            repeat: -1,
        });
        this.gresillement3.play('gresillement3');
        this.gresillement3.scale=1;

        // grésillement en animation millieu 1
        let gresillement4 = this.gresillement4 = this.add.sprite(0,224 , 'gresillement4').setOrigin(0, 0);
        this.anims.create({
            key: 'gresillement4',
            frames: this.getFrames("g-", 4),
            frameRate: 16,
            repeat: -1,
        })
        this.gresillement4.play('gresillement4');
        this.gresillement4.scale=1;

        // grésillement en animation millieu 2
        let gresillement5 = this.gresillement5 = this.add.sprite(gresillement4.x + gresillement4.width, 224, 'gresillement5').setOrigin(0, 0);
        this.anims.create({
            key: 'gresillement5',
            frames: this.getFrames("g-", 4),
            frameRate: 16,
            repeat: -1,
        });
        this.gresillement5.play('gresillement5');
        this.gresillement5.scale=1;

        // grésillement en animation millieu 3
        let gresillement6 = this.gresillement6 = this.add.sprite(gresillement5.x + gresillement5.width, 224, 'gresillement6').setOrigin(0, 0);
        this.anims.create({
            key: 'gresillement6',
            frames: this.getFrames("g-", 4),
            frameRate: 16,
            repeat: -1,
        });
        this.gresillement6.play('gresillement6');
        this.gresillement6.scale=1;

        // grésillement en animation bas 1
        let gresillement7 = this.gresillement7 = this.add.sprite(0, 448, 'gresillement7').setOrigin(0, 0);
        this.anims.create({
            key: 'gresillement7',
            frames: this.getFrames("g-", 4),
            frameRate: 16,
            repeat: -1,
        });
        this.gresillement7.play('gresillement7');
        this.gresillement7.scale=1;

        // grésillement en animation bas 2
        let gresillement8 = this.gresillement8 = this.add.sprite(gresillement7.x + gresillement7.width, 448, 'gresillement8').setOrigin(0, 0);
        this.anims.create({
            key: 'gresillement8',
            frames: this.getFrames("g-", 4),
            frameRate: 16,
            repeat: -1,
        });
        this.gresillement8.play('gresillement8');
        this.gresillement8.scale=1;

        // grésillement en animation bas 3 et donc fin
        let gresillement9 = this.gresillement9 = this.add.sprite(gresillement8.x + gresillement8.width, 448, 'gresillement9').setOrigin(0, 0);
        this.anims.create({
            key: 'gresillement9',
            frames: this.getFrames("g-", 4),
            frameRate: 16,
            repeat: -1,
        });
        this.gresillement9.play('gresillement9');
        this.gresillement9.scale=1;

        // icon mute
        let mute = this.add.image(880, 0, 'mute').setOrigin(0, 0);
        mute.scale = 0.1

        // icon bouton reset
        let reset = this.add.image(350, 150, 'reset').setOrigin(0, 0);
        reset.scale = 1
        reset.setVisible(false)

    }
    getFrames(prefix, length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            frames.push({key: prefix + i});
        }
        return frames;

    }

    initKeyboard() {
    }


    update() {
    }
}
