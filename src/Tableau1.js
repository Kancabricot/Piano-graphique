/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-terrain-4', 'assets/level/background-2/bg2-terrain-4.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-tree-2', 'assets/level/background-1/bg-tree-2.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');


        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gMush1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        this.load.image('gSpike', 'assets/level/ground/g-spike-1.png');
        this.load.image('gBridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gStone3', 'assets/level/ground/g-stone-3.png');
        this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gGrass1', 'assets/level/ground/g-grass-1.png');
        this.load.image('gGrass2', 'assets/level/ground/g-grass-2.png');
        this.load.image('gLiane1', 'assets/level/ground/g-vine-a.png');
        this.load.image('gLiane2', 'assets/level/ground/g-vine-b.png');
        this.load.image('gLiane3', 'assets/level/ground/g-vine-c.png');


        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film
        // TODO FAIT
        for(let i=1;i<=3;i++) {
            this.load.image('filterFilm'+i, 'assets/level/filters/film/frame-'+i+'.png');
        }
        //texture au fond
        // TODO FAIT
        for(let i=1;i<=3;i++) {
            this.load.image('bg-animation-'+i, 'assets/level/background-2/bg-animation/bg-animation-'+i+'.png');
        }
    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */

    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        // première montagne
        let bg2Terrain2=this.add.image(-150,150, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        // deuxième montagne
        let bg2Terrain4=this.add.image(650,100, 'bg2-terrain-4').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain4);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(350,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=0; //pencher l'arbre de tant degrès
        bg2Tree2.flipX=true;

        //arbres montagne deux
        let bg2Tree3=this.add.image(700,-60, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-7; //pencher l'arbre de tant degrès

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        //arbre 1 plan millieu
        let bg1Tree1=this.add.image(-40,-100, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree1);
        bg1Tree1.scale=0.6
        bg1Tree1.flipX=true

        //arbre 2 plan millieu
        let bg1Tree3=this.add.image(120,-120, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3);
        bg1Tree3.angle=0; //pencher l'arbre de tant degrès
        bg1Tree3.scale=0.7;

        //arbre 3 plan millieu
        let bg1Tree2=this.add.image(880,-30, 'bg1-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree2);
        bg1Tree2.angle=0; //pencher l'arbre de tant degrès
        bg1Tree2.scale=0.8;

        //terrain 1
        let bg1Terrain3=this.add.image(-400,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        //terraine 2
        let bg1Terrain1=this.add.image(600,280, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        bg1Terrain1.scale=0.5;


        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre 3
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(880,450, 'gTree1').setOrigin(0,1);
        this.groundContainer.add(tree1);
        tree1.angle=350;
        tree1.FlipX=true

        // arbre 2
        let tree2=this.add.image(250,450, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2);
        tree2.angle=0;
        tree2.scale=0.8;

        // arbre 1
        let tree21=this.add.image(0,450, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree21);
        tree21.flipX=true;

        // champignon
        let gmush1=this.add.image(140,360, 'gMush1').setOrigin(0,1);
        this.groundContainer.add(gmush1);
        gmush1.flipX=true;

        // lac
        let water=this.add.image(590,550,'gWater')
        this.groundContainer.add(water)
        water.scale=1.5

        // pique dans l'eau
        let spike=this.add.image(530,500,'gSpike')
        this.groundContainer.add(spike)
        spike.scale=1
        let spike2=this.add.image(725,500,'gSpike')
        this.groundContainer.add(spike2)
        spike2.scale=1

        //pont
        let bridge=this.add.image(380,380,'gBridge').setOrigin(0,1);
        this.groundContainer.add(bridge)
        bridge.scale=0.8

        // pierre gauche
        let stone3=this.add.image(300,360,'gStone3').setOrigin(0,1);
        this.groundContainer.add(stone3)
        stone3.scale=1

        // pierre droite
        let stone4=this.add.image(770,380,'gStone4').setOrigin(0,1);
        this.groundContainer.add(stone4)
        stone4.scale=0.8
        stone4.flipX=true

        // terrain droite
        let gleft=this.add.image(760,360, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gleft);

        // herbe 1
        let ggrass1=this.add.image(770,335, 'gGrass1').setOrigin(0,0);
        this.groundContainer.add(ggrass1);

        // herbe 2
        let ggrass2=this.add.image(850,320, 'gGrass2').setOrigin(0,0);
        this.groundContainer.add(ggrass2);

        // herbe 3
        let ggrass3=this.add.image(920,320, 'gGrass2').setOrigin(0,0);
        this.groundContainer.add(ggrass3);

        // lianne 1
        let vine101=this.add.image(500,-10, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine101);
        vine101.scale=0.7

        let vine102=this.add.image(500,20, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine102);
        vine102.scale=0.7

        let vine103=this.add.image(505,50, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine103);
        vine103.scale=0.7

        let vine104=this.add.image(505,80, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine104);
        vine104.scale=0.7

        let vine105=this.add.image(500,110, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine105);
        vine105.scale=0.7

        let vine106=this.add.image(500,140, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine106);
        vine106.scale=0.7

        let vine107=this.add.image(505,170, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine107);
        vine107.scale=0.7

        // lianne 2
        let vine201=this.add.image(550,-10, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine201);
        vine201.scale=0.7

        let vine202=this.add.image(550,20, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine202);
        vine202.scale=0.7

        let vine203=this.add.image(555,50, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine203);
        vine203.scale=0.7

        let vine204=this.add.image(555,80, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine204);
        vine204.scale=0.7



        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(-180,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);

        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid2); // peut être fait en boucle
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-1;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
