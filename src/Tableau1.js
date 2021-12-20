class Tableau1 extends Phaser.Scene {


    preload() {
        //level
            // level 1-1
        this.load.image('level-1-1', 'assets/level/1-1.png')

            // level 1-2
        this.load.image('level-1-2', 'assets/level/1-2.png')

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


            // mario
        this.load.image('mario', 'assets/mario.png')

            // bowser
        this.load.image('bowser', 'assets/enemie/bowser.png')

            // bowser boule de feu
        this.load.image('feu', 'assets/enemie/feu.png')

            // nuage
        this.load.image('nuage', 'assets/level/nuage.png')

            // plant
        this.loadFrames('plant-',2,'assets/enemie/plant/plant-')
            // note de musique
        this.loadFrames('n-',9,'assets/note-musique/n-')
            //image bruit
        this.loadFrames('g-',4,'assets/gresillement/g-')


        // icon mute
        this.load.image('mute', 'assets/mute.png')

        // icon bouton reset
        this.load.image('reset', 'assets/bouton-reset.png')

        // preload des sons et musique

            this.load.audio('mario-1',['assets/sound/mario-1.mp3']);
            this.load.audio('mario-2',['assets/sound/mario-2.mp3']);
            this.load.audio('mario-3',['assets/sound/mario-3.mp3']);
            this.load.audio('mario-4',['assets/sound/mario-4.mp3']);
            this.load.audio('mario-5',['assets/sound/mario-5.mp3']);


    }

    create() {

        // nouveau curseur
        this.input.setDefaultCursor('url(assets/cursor/piece.cur), pointer');

        // level 1-1
        this.level1 = this.add.image(0, 0, 'level-1-1').setOrigin(0, 0);

        // level 1-2
        this.level2 = this.add.image(0, 0, 'level-1-2').setOrigin(0, 0);
        this.level2.setVisible(false)

        // animation goomba
        this.goomba = this.add.sprite(-930, -85, 'goomba').setOrigin(0, 0);

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
        this.goomba.setVisible(false)


        // animation coopa
        this.coopa = this.add.sprite(650, 390, 'coopa').setOrigin(0, 0);

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
        this.coopa.setVisible(false)


        // bill
        this.bill = this.add.image(650, 300, 'bill').setOrigin(0, 0);
        this.bill.scale = 0.6

        // bill lanceur
        this.billlanceur = this.add.image(680, 296, 'bill-lanceur').setOrigin(0, 0);
        this.billlanceur.scale = 3

        // plant en animation
        this.plant = this.add.sprite(175, 390, 'plant').setOrigin(0, 0);
        this.anims.create({
            key: 'plant',
            frames: [
                {key: 'plant-1'},
                {key: 'plant-2'},
            ],
            frameRate: 4,
            repeat: -1
        });
        this.plant.play('plant');


        // tuyaux
        this.tuyaux = this.add.image(165, 318, 'tuyaux').setOrigin(0, 0);

        // mario
        this.mario = this.add.image(320, 225, 'mario').setOrigin(0, 0);
        this.mario.scale = 0.8

        // lakitu
        this.lakitu = this.add.image(700, 50, 'lakitu').setOrigin(0, 0);

        // note de musique en animation
        this.note = this.add.sprite(0, 0, 'note').setOrigin(0, 0);
        this.anims.create({
            key: 'note',
            frames: this.getFrames("n-", 9),
            frameRate: 2,
            repeat: -1,
        });
        this.note.play('note');
        this.note.scale = 0.1;
        this.note.setVisible(false)

        // feu de bowser
        this.feu = this.add.image(730, 310, 'feu').setOrigin(0, 0);
        this.feu.scale = 2

        // bowser
        this.bowser = this.add.image(740, 250, 'bowser').setOrigin(0, 0);
        this.bowser.scale = 1.2

        // grésillement en animation haut 1
        let gresillement = this.gresillement = this.add.sprite(0, 0, 'gresillement').setOrigin(0, 0);
        this.anims.create({
            key: 'gresillement',
            frames: this.getFrames("g-", 4),
            frameRate: 16,
            repeat: -1,
        });
        this.gresillement.play('gresillement');
        this.gresillement.scale = 1;
        this.gresillement.alpha = 0.5
        this.gresillement.setVisible(false)

        // grésillement en animation haut 2
        this.gresillement2 = this.gresillement2 = this.add.sprite(gresillement.x + gresillement.width, 0, 'gresillement2').setOrigin(0, 0);
        this.gresillement2.play('gresillement');
        this.gresillement2.scale = 1;
        this.gresillement2.alpha = 0.5
        this.gresillement2.setVisible(false)

        // grésillement en animation haut 3
        this.gresillement3 = this.gresillement3 = this.add.sprite(gresillement.x + gresillement.width * 2, 0, 'gresillement3').setOrigin(0, 0);
        this.gresillement3.play('gresillement');
        this.gresillement3.scale = 1;
        this.gresillement3.alpha = 0.5
        this.gresillement3.setVisible(false)

        // grésillement en animation millieu 1
        this.gresillement4 = this.gresillement4 = this.add.sprite(0, 224, 'gresillement4').setOrigin(0, 0);
        this.gresillement4.play('gresillement');
        this.gresillement4.scale = 1;
        this.gresillement4.alpha = 0.5
        this.gresillement4.setVisible(false)

        // grésillement en animation millieu 2
        this.gresillement5 = this.gresillement5 = this.add.sprite(gresillement.x + gresillement.width, 224, 'gresillement5').setOrigin(0, 0);
        this.gresillement5.play('gresillement');
        this.gresillement5.scale = 1;
        this.gresillement5.alpha = 0.5
        this.gresillement5.setVisible(false)

        // grésillement en animation millieu 3
        this.gresillement6 = this.gresillement6 = this.add.sprite(gresillement.x + gresillement.width * 2, 224, 'gresillement6').setOrigin(0, 0);
        this.gresillement6.play('gresillement');
        this.gresillement6.scale = 1;
        this.gresillement6.alpha = 0.5
        this.gresillement6.setVisible(false)

        // grésillement en animation bas 1
        this.gresillement7 = this.gresillement7 = this.add.sprite(0, 448, 'gresillement7').setOrigin(0, 0);
        this.gresillement7.play('gresillement');
        this.gresillement7.scale = 1;
        this.gresillement7.alpha = 0.5
        this.gresillement7.setVisible(false)

        // grésillement en animation bas 2
        this.gresillement8 = this.gresillement8 = this.add.sprite(gresillement.x + gresillement.width, 448, 'gresillement8').setOrigin(0, 0);
        this.gresillement8.play('gresillement');
        this.gresillement8.scale = 1;
        this.gresillement8.alpha = 0.5
        this.gresillement8.setVisible(false)

        // grésillement en animation bas 3 et donc fin
        this.gresillement9 = this.gresillement9 = this.add.sprite(gresillement.x + gresillement.width * 2, 448, 'gresillement9').setOrigin(0, 0);
        this.gresillement9.play('gresillement');
        this.gresillement9.alpha = 0.5
        this.gresillement9.setVisible(false)


        // icon mute
        this.mute = this.add.image(880, 0, 'mute').setOrigin(0, 0);
        this.mute.scale = 0.1


        // icon bouton reset
        this.reset = this.add.image(350, 150, 'reset').setOrigin(0, 0);
        this.reset.scale = 1
        this.reset.setVisible(false)


        /**
         *  Les tween sont joués dedans
         */

            // goomba en yoyo
        let goombat = this.goomba.play(100, 300, 'goomba');
        let goombatween = this.tweens.add({
            targets: goombat,
            x: -820,
            duration: 1000,
            ease: 'power',
            yoyo: true,
            repeat: -1
        });

        // coopa en yoyo
        let coopat = this.coopa.play(100, 300, 'coopa');
        let coopatween = this.tweens.add({
            targets: coopat,
            x: 230,
            duration: 3000,
            ease: 'power',
            yoyo: true,
            repeat: -1,
            flipX: true
        });

        // plant en yoyo Y
        let plantt = this.plant.play(100, 300, 'plant');
        let planttween = this.tweens.add({
            targets: plantt,
            y: 230,
            duration: 3000,
            ease: 'power',
            yoyo: true,
            hold: 2000,
            repeat: -1,
        });

        this.initKeyboard();
    }

    tween(){
        // nuage  en tween

        let nuaget = this.add.image(-400, 100, 'nuage');
        let nuageatween = this.tweens.add({
            targets: nuaget,
            x: 1800,
            duration: 30000,
            ease: 'power',
            repeat: -1,
        });

    }
    // pour faire des animations en plus rapide car ne note pas toutes les images grace à lui
    getFrames(prefix, length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            frames.push({key: prefix + i});
        }
        return frames;
    }

    loadFrames(prefix,length,baseUrl){
        for (let i=1;i<=length;i++){
            this.load.image(prefix+i,baseUrl+i+'.png')
        }
    }

    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                // initialisation de la touche en appuis A pour le niveau 1-1
                case Phaser.Input.Keyboard.KeyCodes.A:

                    me.level1.setVisible(true)
                    me.level2.setVisible(false)
                    break;

                // initialisation de la touche en appuis Z pour le niveau 2-2
                case Phaser.Input.Keyboard.KeyCodes.Z:

                    me.level1.setVisible(false)
                    me.level2.setVisible(true)
                    break;

                // initialisation de la touche en appuis Y pour le goomba
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    if (me.goomba.visible == true) {
                        me.goomba.setVisible(false)
                    } else {
                        me.goomba.setVisible(true)
                    }
                    break;

                // initialisation de la touche en appuis U pour le coopa
                case Phaser.Input.Keyboard.KeyCodes.U:
                    if (me.coopa.visible == true) {
                        me.coopa.setVisible(false)
                    } else {
                        me.coopa.setVisible(true)
                    }
                    break;

                // initialisation de la touche en appuis I pour le bill et le bill lanceur
                case Phaser.Input.Keyboard.KeyCodes.I:
                    if (me.bill.visible == true) {
                        me.bill.setVisible(false)
                    } else {
                        me.bill.setVisible(true)
                    }
                    if (me.billlanceur.visible == true) {
                        me.billlanceur.setVisible(false)
                    } else {
                        me.billlanceur.setVisible(true)
                    }
                    break;

                // initialisation de la touche en appuis O pour le tuyaux et fais disparaître la plante si on enleve le tuyaux
                case Phaser.Input.Keyboard.KeyCodes.O:
                    if (me.tuyaux.visible == true) {
                        me.tuyaux.setVisible(false)
                        me.plant.setVisible(false)
                    } else {
                        me.tuyaux.setVisible(true)
                    }
                    break;

                // initialisation de la touche en appuis P pour la plant et l'anime si la tuyaux n'est pas la alors ne la fait pas spawn
                case Phaser.Input.Keyboard.KeyCodes.P:
                    if (me.plant.visible == true) {
                        me.plant.setVisible(false)

                    } else {
                        if (me.tuyaux.visible == true) {
                            me.plant.setVisible(true)
                        }
                    }
                    break;

                // initialisation de la touche en appuis Q pour mario
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    if (me.mario.visible == true) {
                        me.mario.setVisible(false)
                    } else {
                        me.mario.setVisible(true)
                    }
                    break;

                // initialisation de la touche en appuis S pour le curseur boule de feu
                case Phaser.Input.Keyboard.KeyCodes.U:
                    if (me.coopa.visible == true) {
                        me.coopa.setVisible(false)
                    } else {
                        me.coopa.setVisible(true)
                    }
                    break;

                // initialisation de la touche en appuis D pour le curseur boule de feu
                case Phaser.Input.Keyboard.KeyCodes.D:
                    if (me.lakitu.visible == true) {
                        me.lakitu.setVisible(false)
                    } else {
                        me.lakitu.setVisible(true)
                    }
                    break;

                // initialisation de la touche en appuis F faire bouger les nuage en tween et relacher pour stopper
                case Phaser.Input.Keyboard.KeyCodes.F:
                    me.tween()
                    break;


                // initialisation de la touche en appuis X mettre les bruit/neige tv
                case Phaser.Input.Keyboard.KeyCodes.X:
                    if (me.gresillement.visible == true) {

                        me.gresillement.setVisible(false)
                        me.gresillement2.setVisible(false)
                        me.gresillement3.setVisible(false)
                        me.gresillement4.setVisible(false)
                        me.gresillement5.setVisible(false)
                        me.gresillement6.setVisible(false)
                        me.gresillement7.setVisible(false)
                        me.gresillement8.setVisible(false)
                        me.gresillement9.setVisible(false)
                    } else {
                        me.gresillement.setVisible(true)
                        me.gresillement2.setVisible(true)
                        me.gresillement3.setVisible(true)
                        me.gresillement4.setVisible(true)
                        me.gresillement5.setVisible(true)
                        me.gresillement6.setVisible(true)
                        me.gresillement7.setVisible(true)
                        me.gresillement8.setVisible(true)
                        me.gresillement9.setVisible(true)
                    }
                    break;

                // initialisation de la touche en appuis G-L faire lancer la musique et faire une note pour le prouver
                case Phaser.Input.Keyboard.KeyCodes.G:
                    if (me.note.visible == true) {
                        me.note.setVisible(false)
                    } else {
                        me.note.setVisible(true)

                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.H:
                    if (me.note.visible == true) {
                        me.note.setVisible(false)
                    } else {
                        me.note.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    if (me.note.visible == true) {
                        me.note.setVisible(false)
                    } else {
                        me.note.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.K:
                    if (me.note.visible == true) {
                        me.note.setVisible(false)
                    } else {
                        me.note.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.L:
                    if (me.note.visible == true) {
                        me.note.setVisible(false)
                    } else {
                        me.note.setVisible(true)
                    }
                    break;

                // initialisation de M pour faire apparaître bowser
                case Phaser.Input.Keyboard.KeyCodes.M:
                    if (this.bowser.visible == true) {
                        this.bowser.setVisible(false)
                    } else {
                        me.bowser.setVisible(true)
                    }
                    break;

            }
        });

    }

    update() {

    }
}