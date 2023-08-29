//--------------------Query Selectors--------------------
const tonalidad = document.querySelector('#tonalidad')
let verso = document.querySelector('#verso')
const dotsContainer = document.querySelector('#dotsContainer')
const comandos = document.querySelector('#comandos')

//--------------------Songs--------------------
const letra = {
    0: {
        tonalidad: 'G',
        versos: [
            `<h1>
                Todas las promesas del Señor Jesús<br/>
                Son apoyo poderoso de mi fe;<br/>
                Mientras viva aquí cercado de su luz,<br/>
                Siempre en sus promesas confiaré.
            </h1>`,
            `<h1>
                Coro:<br/>
                Grandes, fieles,<br/>
                Las promesas que el Señor Jesús ha dado;<br/>
                Grandes, fieles,<br/>
                En ellas para siempre confiaré.
            </h1>`,
            `<h1>
                Todas sus promesas para el hombre fiel,<br/>
                El Señor, en sus bondades, cumplirá;<br/>
                Y confiado sé que para siempre en El<br/>
                Paz eterna mi alma gozará.
            </h1>`,
            `<h1>
                Coro:<br/>
                Grandes, fieles,<br/>
                Las promesas que el Señor Jesús ha dado;<br/>
                Grandes, fieles,<br/>
                En ellas para siempre confiaré.
            </h1>`,
            `<h1>
                Todas las promesas del Señor serán<br/>
                Gozo y fuerza en nuestra vida terrenal;<br/>
                Ellas en la dura lid nos sostendrán,<br/>
                Y triunfar podremos sobre el mal.
            </h1>`,
            `<h1>
                Coro:<br/>
                Grandes, fieles,<br/>
                Las promesas que el Señor Jesús ha dado;<br/>
                Grandes, fieles,<br/>
                En ellas para siempre confiaré.
            </h1>`
        ]
    },
    1: {
        tonalidad: 'F',
        versos: [
            `<h1>
                Grande gozo hay en mi alma hoy,<br/>
                Pues Jesús conmigo está.<br/>
                Y su paz que ya gozando estoy,<br/>
                Por siempre durará.
            </h1>`,
            `<h1>
                Coro:<br/>
                Grande gozo, cuán hermoso<br/>
                Cuando paso el tiempo bien feliz.<br/>
                Porque veo de Cristo la sonriente faz<br/>
                grande gozo siento en mí.
            </h1>`,
            `<h1>
                Hay un canto en mi alma hoy,<br/>
                melodías a mi rey.<br/>
                En su amor feliz y libre soy<br/>
                y salvo por la fe.
            </h1>`,
            `<h1>
                Coro:<br/>
                Grande gozo, cuán hermoso<br/>
                Cuando paso el tiempo bien feliz.<br/>
                Porque veo de Cristo la sonriente faz<br/>
                grande gozo siento en mí.
            </h1>`,
            `<h1>
                Paz divina hay en mi alma hoy<br/>
                porque Cristo me salvó.<br/>
                Las cadenas rotas ya están.<br/>
                Jesús me libertó.
            </h1>`,
            `<h1>
                Coro:<br/>
                Grande gozo, cuán hermoso<br/>
                Cuando paso el tiempo bien feliz.<br/>
                Porque veo de Cristo la sonriente faz<br/>
                grande gozo siento en mí.
            </h1>`,
        ]
    },
    2: {
        tonalidad: 'F',
        versos: [
            `<h1>
                Hallé un buen amigo, mi amado Salvador,<br/>
                Contaré lo que él ha hecho para mí:<br/>
                Hallándome perdido e indigno pecador,<br/>
                Me salvó y ya me guarda para sí.
            </h1>`,
            `<h1>
                Me salva del pecado, me guarda de Satán,<br/>
                Promete estar conmigo hasta el fin;<br/>
                El consuela mi tristeza, me quita todo afán,<br/>
                ¡Grandes cosas Cristo ha hecho para mí!
            </h1>`,
            `<h1>
                Jesús jamás me falta, jamás me dejará,<br/>
                Es mi fuerte y poderoso protector;<br/>
                Del mundo yo me aparto y toda vanidad<br/>
                Para dedicar mi vida a mi Señor.<br/>
            </h1>`,
            `<h1>
                Si el mundo me persigue, si sufro tentación,<br/>
                Confiando en Cristo puedo resistir;<br/>
                La victoria me es segura y elevo mi canción,<br/>
                ¡Grandes cosas Cristo ha hecho para mí!
            </h1>`,
            `<h1>
                Yo sé que Jesucristo muy pronto volverá,<br/>
                Y entretanto me prepara un lugar<br/>
                En la casa de mi Padre, mansión de luz y paz,<br/>
                Do el creyente fiel con él ha de morar.<br/>
            </h1>`,
            `<h1>
                Llegándome a la gloria, con El yo estaré<br/>
                Y contemplaré su rostro siempre allí;<br/>
                Con los santos redimidos gozoso cantaré,<br/>
                ¡Grandes cosas Cristo ha hecho para mí!
            </h1>`,
        ]
    },
    3: {
        tonalidad: 'F',
        versos: [
            `<h1>
                Grato es decir la historia del celestial favor,<br/>
                De Cristo y de su gloria, de Cristo y de su amor.<br/>
                Me agrada referirla, pues sé que es la verdad;<br/>
                Y nada satisface cual ella mi ansiedad.
            </h1>`,
            `<h1>        
                CORO<br/>
                ¡Cuán bella es esa historia!<br/>
                Mi tema allá en la Gloria<br/>
                Será la antigua historia<br/>
                De Cristo y de su amor.
            </h1>`,
            `<h1>
                Grato es decir la historia que antigua, sin vejez,<br/>
                Parece al repetirla más dulce cada vez;<br/>
                Me agrada referirla, pues hay quien nunca oyó<br/>
                Que para hacerle salvo el buen Jesús murió
            </h1>`,
            `<h1>        
                CORO<br/>
                ¡Cuán bella es esa historia!<br/>
                Mi tema allá en la Gloria<br/>
                Será la antigua historia<br/>
                De Cristo y de su amor.
            </h1>`,
            `<h1>
                Grato es decir la historia; el que la sabe ya,<br/>
                Parece que de oírla sediento aún está.<br/>
                Y cuando el nuevo canto en gloria entonaré,<br/>
                Será la antigua historia que en vida tanto amé.
            </h1>`,
            `<h1>        
                CORO<br/>
                ¡Cuán bella es esa historia!<br/>
                Mi tema allá en la Gloria<br/>
                Será la antigua historia<br/>
                De Cristo y de su amor.
            </h1>`,
        ]
    },
    4: {
        tonalidad: 'D',
        versos: [
            `<h1>
                Nuestro canto expresa un sentir,<br/>
                y es preciso que se pueda a oír,<br/>
                en las calles, en las plazas,<br/>
                en los campos, las montañas,<br/>
                a lo largo y a lo ancho del país.
            </h1>`,        
            `<h1>
                Jesucristo es la verdad,<br/>
                nuestra fe y nuestro compromiso.<br/>
                Él es la vida en plenitud,<br/>
                él es la fuerza y es la luz, <br/>
                es la alegría que me alienta a continuar.<br/>                
            </h1>`,
            `<h1>
                Es el poder para cambiar<br/>
                toda una vida y darle más.<br/>
                Jesucristo es la razón para vivir.
            </h1>`,
            `<h1>
                Este es el momento para actuar<br/>
                En cada rincón, cada lugar.<br/>
                Nuestra patria necesita <br/>
                actitudes decididas<br/>
                de cristianos que se jueguen de verdad.
            </h1>`,
            `<h1>
                Jesucristo es la verdad,<br/>
                nuestra fe y nuestro compromiso.<br/>
                Él es la vida en plenitud,<br/>
                él es la fuerza y es la luz, <br/>
                es la alegría que me alienta a continuar.<br/>                
            </h1>`,
            `<h1>
                Es el poder para cambiar<br/>
                toda una vida y darle más.<br/>
                Jesucristo es la razón para vivir.
            </h1>`,
        ]
    },
    5: {
        tonalidad: 'C',
        versos: [
            `<h1>
                A Cristo coronad, divino Salvador;<br/>
                sentado en alta majestad es digno de loor;<br/>
                Al Rey de gloria y paz loores tributad,<br/>
                y bendecid al Inmortal por toda eternidad.
            </h1>`,
            `<h1>
                A Cristo coronad, Señor de nuestro amor;<br/>
                al Rey triunfante celebrad, glorioso vencedor;<br/>
                Potente Rey de paz, el triunfo consumó,<br/>
                y por Su muerte de dolor Su grande amor mostró.
            </h1>`,
            `<h1>
                A Cristo coronad, Señor de vida y luz;<br/>
                con alabanzas proclamad los triunfos de la cruz;<br/>
                A Él solo adorad, Señor de salvación;<br/>
                Loor eterno tributad de todo corazón.
            </h1>`,
        ]
    },
    6: {
        tonalidad: 'G',
        versos: [
            `<h1>
                Majestad, gloria a su majestad.<br/>
                Jesucristo merece todo honor.<br/>
                Majestad, reino y autoridad.<br/>
                Suyo el honor, suyo el poder. ¡Gloria a él!
            </h1>`,
            `<h1>
                Exaltad, engrandeced su santo nombre.<br/>
                Alabad, magnificad a Cristo, el rey.<br/>
                Majestad, gloria a su majestad.<br/>
                Cristo murió, resucitó y hoy es Señor.<br/>
                Cristo murió, resucitó. ¡Gloria a él!
            </h1>`,
        ]
    },
    7: {
        tonalidad: 'G',
        versos: [
            `<h1>
                Maravilloso Dios,<br/>
                tú permaneces siempre fiel.<br/>
                Tu gloria y tu poder<br/>
                llenan mi vida de tu ser.
            </h1>`,
            `<h1>
                Sosténme con tu amor,<br/>
                Pon la victoria y tu perdón.<br/>
                Desde mi corazón te canto hoy.
            </h1>`,
        ]
    },
    8: {
        tonalidad: 'A',
        versos: [
            `<h1>
                Mi Cristo, mi rey,<br/>
                Nadie es como tú.<br/>
                Toda mi vida quiero exaltar<br/>
                Las maravillas de tu amor.
            </h1>`,
            `<h1>
                Consuelo, refugio, <br/>
                torre de fuerza y poder.<br/>
                Todo mi ser, lo que yo soy<br/>
                Nunca deje de alabar.
            </h1>`,
            `<h1>
                Cante al Señor toda la creación.<br/>
                Honra y poder, majestad sea al rey.<br/>
                Montes caerán y el mar rugirá<br/>
                al sonar de tu nombre.
            </h1>`,
            `<h1>
                Canto con gozo al mirar tu poder.<br/>
                Por siempre yo te amaré y diré:<br/>
                Incomparables promesas me das Señor.
            </h1>`,
        ]
    },
    9: {
        tonalidad: 'C',
        versos: [
            `<h1>
                Padre del cielo, te adoramos<br/>
                Y alzamos hoy tu nombre en alto.<br/>
                Que tu reino se establezca en alabanza<br/>
                De tu pueblo que hoy declara tu poder.
            </h1>`,
            `<h1>
                Bendito sea el Señor, Dios poderoso,<br/>
                quien fue y quien es y quien vendrá.<br/>
                Bendito sea el Señor, Dios poderoso,<br/>
                Por siempre reinará.
            </h1>`,
        ]
    },
    10: {
        tonalidad: 'F',
        versos: [
            `<h1>
                Al estar en la presencia de tu divinidad<br/>
                Y al contemplar la hermosura de tu santidad,<br/>
                Mi espíritu se alegra en tu majestad.<br/>
                Te adoro a ti, te adoro a ti.
            </h1>`,
            `<h1>
                Cuando veo la grandeza de tu dulce amor<br/>
                y compruebo la pureza de tu corazón<br/>
                mi espíritu se alegra en tu majestad.<br/>
                Te adoro a ti, te adoro a ti.
            </h1>`,
            `<h1>
                Y al estar aquí, delante de ti, te adoraré.<br/>
                Postrado ante ti mi corazón te adora, oh Dios.<br/>
                Y siempre quiero estar para adorar <br/>
                y contemplar tu santidad.<br/>
                Te adoro a ti, Señor, te adoro a ti.
            </h1>`,
        ]
    },
    11: {
        tonalidad: 'A',
        versos: [
            `<h1>
                El Señor es mi pastor,<br/>
                nada me faltará.<br/>
                El Señor es mi pastor,<br/>
                En pastos delicados<br/>
                me hará descansar.
            </h1>`,
            `<h1>
                Junto a aguas de reposo<br/>
                me pastoreará.<br/>
                Confortará mi alma,<br/>
                me guiará por sendas de justicia<br/>
                por amor de su nombre.
            </h1>`,
            `<h1>
                El Señor es mi pastor,<br/>
                nada me faltará.
            </h1>`,
        ]
    },    
    12: {
        tonalidad: 'D',
        versos: [
            `<h1>
                Cuando la trompeta del Señor se toque, la final,<br/>
                Con fulgor apunte el día eternal,<br/>
                Y los redimidos suban a su casa celestial,<br/>
                Cuando allá se pase lista yo estaré.
            </h1>`,
            `<h1>
                Coro:<br/>
                Cuando allá se pase lista, (tres veces)<br/>
                Cierto estoy que por su gracia allí estaré.
            </h1>`,
            `<h1>
                Cuando todas sombras huyan<br/>
                en la gran resurrección,<br/>
                De los muertos en Jesús sin corrupción,<br/>
                Y en las nubes al Señor reciban ¡qué consolación!<br/>
                Cuando allá se pase lista yo estaré.
            </h1>`,
            `<h1>
                Coro:<br/>
                Cuando allá se pase lista, (tres veces)<br/>
                Cierto estoy que por su gracia allí estaré.
            </h1>`,
            `<h1>
                Trabajar es mi deseo sin cesar por el Señor,<br/>
                Siempre hablando de su gracia y de su amor,<br/>
                Cuando acabe aquí mi obra<br/>
                y me llame el Salvador,<br/>
                Cuando allá se pase lista yo estaré.
            </h1>`,
            `<h1>
                Coro:<br/>
                Cuando allá se pase lista, (tres veces)<br/>
                Cierto estoy que por su gracia allí estaré.
            </h1>`,
        ]
    },
    13: {
        tonalidad: 'C',
        versos: [
            `<h1>
                En Jesucristo, el Rey de paz,<br/>
                en horas negras de tempestad,<br/>
                hallan las almas dulce solaz,<br/>
                grato consuelo, felicidad.
            </h1>`,
            `<h1>            
                Coro:<br/>
                Gloria cantemos al Redentor<br/>
                que por nosotros vino a morir;<br/>
                y que la gracia del Salvador<br/>
                siempre proteja nuestro vivir.
            </h1>`,
            `<h1>            
                En nuestras luchas, en el dolor,<br/>
                en tristes horas de tentación,<br/>
                Cristo nos llena de su vigor,<br/>
                y da aliento al corazón.
            </h1>`,
            `<h1>            
                Coro:<br/>
                Gloria cantemos al Redentor<br/>
                que por nosotros vino a morir;<br/>
                y que la gracia del Salvador<br/>
                siempre proteja nuestro vivir.
            </h1>`,
            `<h1>            
                Cuando luchamos llenos de fe<br/>
                y no queremos desfallecer,<br/>
                Cristo nos dice: "siempre os daré <br/>
                gracia divina, santo poder".
            </h1>`,
            `<h1>            
                Coro:<br/>
                Gloria cantemos al Redentor<br/>
                que por nosotros vino a morir;<br/>
                y que la gracia del Salvador<br/>
                siempre proteja nuestro vivir.
            </h1>`,
        ]
    },
    14: {
        tonalidad: 'E',
        versos: [
            `<h1>
                // No hay Dios tan grande como tú.<br/>
                No lo hay, no la hay. //
            </h1>`,
            `<h1>
                // No hay Dios que pueda hacer las obras<br/>
                Como las que haces tú. //
            </h1>`,
            `<h1>
                // No es con ejército, ni con espada,<br/>
                Mas con tu santo espíritu. //
            </h1>`,
            `<h1>    
                Y esos montes se moverán.<br/>
                Y esos montes se moverán.<br/>
                Y esos montes se moverán,<br/>
                Con tu santo espíritu.
            </h1>`,
        ]
    },
    15: {
        tonalidad: 'A',
        versos: [
            `<h1>
                // Vine a adorar a Dios.<br/>
                Vine a adorar a Dios.<br/>
                Vine a adorar Su Nombre<br/>
                Vine a adorar a Dios. //
            </h1>`,
            `<h1>    
                Él vino a mi vida<br/>
                en un día muy especial.<br/>
                Cambió mi corazón<br/>
                Me enseñó un nuevo andar.
            </h1>`,
            `<h1>
                Y esa es la razón<br/>
                por la que digo hoy:<br/>
                Vine a adorar a Dios.
            </h1>`,
        ]
    },
    16: {
        tonalidad: 'C',
        versos: [
            `<h1>
                Yo vivo, Señor, porque tú vives.<br/>
                Porque tú vives, Señor, es que yo vivo.<br/>
                // Me das consuelo, me das abrigo<br/>
                y en la aflicción, mi Señor, estás conmigo. //
            </h1>`,
            `<h1>            
                Soy salvo, Señor, tú me salvaste,<br/>
                Tú me salvaste, Señor, eternamente<br/>
                // Yo voy al cielo, voy a la gloria,<br/>
                porque, Señor, tú me diste la victoria. //
            </h1>`,
        ]
    },
    17: {
        tonalidad: 'D',
        versos: [
            `<h1>
                // Mirad cuál amor nos ha dado el Padre <br/>
                al hacernos hijos de Dios. //<br/>
                // Para ser llamados hijos de Dios. //
            </h1>`,
        ]
    },
    18: {
        tonalidad: 'C',
        versos: [
            `<h1>
                Renuévame, Señor Jesús,<br/>
                ya no quiero ser igual.<br/>
                Renuévame, Señor Jesús,<br/>
                pon en mí tu corazón.
            </h1>`,
            `<h1>    
                Porque todo lo que hay dentro de mí<br/>
                necesita ser cambiado, Señor.<br/>
                Porque todo lo que hay dentro de mi corazón<br/>
                necesita más de ti.
            </h1>`,
        ]
    },
    19: {
        tonalidad: 'F',
        versos: [
            `<h1>    
                Coro:<br/>
                Hay poder, sí, sin igual poder,<br/>
                en Jesús que murió.<br/>
                Hay poder, sí, sin igual poder<br/>
                por la sangre que vertió.
            </h1>`,
            `<h1>
                ¿Quieres ser libre del vicio y del mal?<br/>
                Virtud hay en Él, virtud en Él,<br/>
                ¿Quieres por Él la victoria ganar?<br/>
                Por siempre virtud hay en Él.
            </h1>`,
            `<h1>    
                Coro:<br/>
                Hay poder, sí, sin igual poder,<br/>
                en Jesús que murió.<br/>
                Hay poder, sí, sin igual poder<br/>
                por la sangre que vertió.
            </h1>`,
            `<h1>    
                ¿Quieres ser libre de tu vanidad?<br/>
                Virtud hay en Él, virtud en Él,<br/>
                Pide a Jesús que te dé su humildad,<br/>
                por siempre virtud hay en Él. 
            </h1>`,
            `<h1>    
                Coro:<br/>
                Hay poder, sí, sin igual poder,<br/>
                en Jesús que murió.<br/>
                Hay poder, sí, sin igual poder<br/>
                por la sangre que vertió.
            </h1>`,
            `<h1>    
                ¿Quieres a Cristo servir y agradar?<br/>
                Virtud hay en Él, virtud en Él,<br/>
                ¿Quieres corona de vida ganar?<br/>
                Por siempre virtud hay en Él. 
            </h1>`,
            `<h1>    
                Coro:<br/>
                Hay poder, sí, sin igual poder,<br/>
                en Jesús que murió.<br/>
                Hay poder, sí, sin igual poder<br/>
                por la sangre que vertió.
            </h1>`,
        ]
    },
    20: {
        tonalidad: 'E',
        versos: [
            `<h1>
                ¿Qué amor mis pecados decide olvidar?<br/>
                Lanzados al mar no los quiere contar.<br/>
                El siendo Omnisciente olvida mi error.<br/>
                Mis faltas son muchas, su gracia es Mayor.
            </h1>`,
            `<h1>    
                CORO<br/>
                ¡Gloria Dios! Su gracia es mayor.<br/>
                Sus misericordias hoy nuevas son.<br/>
                Mis faltas son muchas, su gracia es mayor.
            </h1>`,
            `<h1>    
                Paciente me aguarda en mi desviar.<br/>
                Un padre que tierno me llama al hogar<br/>
                recibe al débil y vil pecador.<br/>
                Mis faltas son muchas, Su gracia es Mayor.
            </h1>`,
            `<h1>    
                CORO<br/>
                ¡Gloria Dios! Su gracia es mayor.<br/>
                Sus misericordias hoy nuevas son.<br/>
                Mis faltas son muchas, su gracia es mayor.
            </h1>`,
            `<h1>    
                Que grandes riquezas Él nos otorgó.<br/>
                Su sangre fue el pago, su vida entregó.<br/>
                Pago esa deuda y la canceló<br/>
                Mis faltas son muchas, su gracia es Mayor.
            </h1>`,
            `<h1>    
                CORO<br/>
                ¡Gloria Dios! Su gracia es mayor.<br/>
                Sus misericordias hoy nuevas son.<br/>
                Mis faltas son muchas, su gracia es mayor.
            </h1>`,
        ]
    },
    21: {
        tonalidad: 'D',
        versos: [
            `<h1>
                No es sólo ser porque sí, <br/>
                no es la decisión de un día.<br/>
                No es solamente creer o pensar.<br/>
                No es una etapa en la vida.
            </h1>`,
            `<h1>    
                Es el porqué de mi ser,<br/>
                el para qué de mi existencia.<br/>
                Es la razón que me mueve a luchar<br/>
                por un estilo de vida.
            </h1>`,
            `<h1>
                Cristo es amor, Cristo es acción, <br/>
                Cristo es vida, vida que está en mí.<br/>
                ¡Vida que está en mí!
            </h1>`,
            `<h1>
                Siento que puede cambiar<br/>
                mi debilidad y fracaso<br/>
                en una fuerza que deje mostrar<br/>
                su vida actuando en la mía.
            </h1>`,
            `<h1>    
                Estoy viviendo con Él,<br/>
                Él es mi amigo más cercano.<br/>
                Piensa en Jesús y contigo estará<br/>
                para estrecharte la mano.
            </h1>`,
            `<h1>
                Cristo es amor, Cristo es acción, <br/>
                Cristo es vida, vida que está en mí.<br/>
                ¡Vida que está en mí!
            </h1>`,
        ]
    },
    22: {
        tonalidad: 'D',
        versos: [
            `<h1>
                Tú dejaste tu trono y corona por mí<br/>
                al venir a Belén a nacer.<br/>
                Mas a ti no fue dado el entrar al mesón<br/>
                y en pesebre te hicieron yacer.
            </h1>`,
            `<h1>    
                CORO:<br/>
                Ven a mi corazón, oh Cristo,<br/>
                pues en él hay lugar para ti.<br/>
                Ven a mi corazón, oh Cristo, ven,<br/>
                pues en él hay lugar para ti.
            </h1>`,
            `<h1>    
                Tú viniste, Señor, con tu gran bendición<br/>
                para dar libertad y salud.<br/>
                Mas con odio y desprecio te hicieron morir<br/>
                aunque vieron tu amor y virtud.
            </h1>`,
            `<h1>    
                CORO:<br/>
                Ven a mi corazón, oh Cristo,<br/>
                pues en él hay lugar para ti.<br/>
                Ven a mi corazón, oh Cristo, ven,<br/>
                pues en él hay lugar para ti.
            </h1>`,
            `<h1>
                Alabanzas sublimes los cielos darán<br/>
                cuando vengas glorioso de allí.<br/>
                Y tu voz entre nubes dirá: Ven a mí,<br/>
                que a mi lado hay lugar para ti.
            </h1>`,
            `<h1>    
                CORO:<br/>
                Ven a mi corazón, oh Cristo,<br/>
                pues en él hay lugar para ti.<br/>
                Ven a mi corazón, oh Cristo, ven,<br/>
                pues en él hay lugar para ti.
            </h1>`,
        ]
    },
    23: {
        tonalidad: 'A',
        versos: [
            `<h1>
                ¡Oh, Santísimo, felicísimo,<br/>
                grato tiempo de Navidad!<br/>
                Al mundo perdido, Cristo le ha nacido.<br/>
                ¡Alegría, alegría, cristiandad!
            </h1>`,
            `<h1>    
                ¡Oh, Santísimo, felicísimo,<br/>
                grato tiempo de Navidad!<br/>
                Coros celestiales, oyen los mortales.<br/>
                ¡Alegría, alegría, cristiandad!
            </h1>`,
            `<h1>    
                ¡Oh, Santísimo, felicísimo,<br/>
                grato tiempo de Navidad! <br/>
                Príncipe del cielo, danos tu consuelo.<br/>
                ¡Alegría, alegría, cristiandad!
            </h1>`,
        ]
    },
    24: {
        tonalidad: 'D',
        versos: [
            `<h1>
                Ángeles cantando están<br/>
                tan dulcísima canción;<br/>
                Las monta?as su eco dan<br/>
                como fiel contestación. 
            </h1>`,
            `<h1>    
                Gloria a Dios en lo alto.<br/>
                Gloria a Dios en lo alto.
            </h1>`,
            `<h1>
                Los pastores sin cesar<br/>
                Sus loores dan a Dios<br/>
                Cuán glorioso es el cantar<br/>
                De su melodiosa voz
            </h1>`,
            `<h1>    
                Gloria a Dios en lo alto.<br/>
                Gloria a Dios en lo alto.
            </h1>`,
        ]
    },
    25: {
        tonalidad: 'A',
        versos: [
            `<h1>
                El regalo de Dios es Cristo,<br/>
                el niño de la Navidad.<br/>
                Y con él te ofrece la vida, paz,<br/>
                Y allá en el cielo un lugar.
            </h1>`,
            `<h1>
                CORO:<br/>
                El regalo de Dios es Cristo.<br/>
                Feliz quien lo quiera aceptar.<br/>
                No hay nadie que pueda dar paz.<br/>
                Ven a Cristo hoy en Navidad.
            </h1>`,
            `<h1>
                Entre luces parpadeantes<br/>
                el mundo va a festejar<br/>
                pero luz en el alma, felicidad,<br/>
                tan sólo en Cristo encontrarán.
            </h1>`,
            `<h1>
                CORO:<br/>   
                El regalo de Dios es Cristo.<br/>
                Feliz quien lo quiera aceptar.<br/>
                No hay nadie que pueda dar paz.<br/>
                Ven a Cristo hoy en Navidad.
            </h1>`,
        ]
    },
    26: {
        tonalidad: 'F',
        versos: [
            `<h1>
                Noche de paz, noche de amor. <br/>
                Todo duerme en derredor. <br/>
                Entre los astros que esparcen su luz, <br/>
                bella anunciando al niñito Jesús, <br/>
                brilla la estrella de paz,<br/>
                brilla la estrella de paz.
            </h1>`,
            `<h1>
                Noche de paz, noche de amor.<br/>
                Ved que bello resplandor<br/> 
                luce en el rostro del niño Jesús.<br/> 
                En el pesebre del mundo la luz.<br/> 
                Astro de eterno fulgor.<br/> 
                Astro de eterno fulgor.
            </h1>`,
        ]
    },
    27: {
        tonalidad: 'D',
        versos: [
            `<h1>
                CRISTO NACIÓ, CRISTO NACIÓ<br/>
                REGALO DE DIOS, SU HIJO NOS DIO<br/>
                FUE EN BELÉN, FUE EN BELÉN,<br/>
                ÁNGELES MIL CANTARON ASÍ.<br/>
                ////ALELUYA//// AMÉN.
            </h1>`,
        ]
    },
    28: {
        tonalidad: 'A',
        versos: [
            `<h1>
                No se había visto nunca tanta gente en Belén,<br/>
                ciudad tan pequeñita olvidada en el ayer,<br/>
                hasta que un simple censo<br/> 
                los atrajo hasta el lugar<br/>
                y entre el tumulto, un niño<br/>
                en la panza de su mamá.
            </h1>`,
            `<h1>    
                Corren de un lado a otro trabajando sin parar.<br/>
                Una vez que hay trabajo<br/>
                lo tienen que aprovechar.<br/>
                Y al hospedar a todos la posada se llenó.<br/>
                Para José y María ya no queda ni un rincón.
            </h1>`,
            `<h1>
                CORO:<br/>
                Nadie guardó un lugar para que tú nacieras.<br/>
                Para el niño del cielo no hay lugar en la tierra.<br/>
                Tú que viniste a dar por amor la vida entera,<br/>
                has recibido un “No”.<br/>
                No hay lugar para que vengas.
            </h1>`,
            `<h1>
                Pensar que todo el pueblo<br/>
                ha esperado un Salvador<br/>
                y cuando llega el tiempo no le prestan atención.<br/>
                Están tan satisfechos al ver lleno su mesón,<br/>
                no logran ver tu hora y te cierran el portón.
            </h1>`,
            `<h1>
                CORO:<br/>
                Nadie guardó un lugar para que tú nacieras.<br/>
                Para el niño del cielo no hay lugar en la tierra.<br/>
                Tú que viniste a dar por amor la vida entera,<br/>
                has recibido un “No”.<br/>
                No hay lugar para que vengas.
            </h1>`,
        ]
    },
    29: {
        tonalidad: 'D',
        versos: [
            `<h1>
                Allá en el pesebre, do nace Jesús,<br/>
                La cuna de paja nos vierte gran luz;<br/>
                Estrellas lejanas del cielo al mirar<br/>
                Se inclinan gozosas su lumbre a prestar.
            </h1>`,
            `<h1>
                Pastores del campo, teniendo temor<br/>
                Cercados de luz y de gran resplendor,<br/>
                Acuden aprisa buscando a Jesús,<br/>
                Nacido en pesebre del mundo la luz.
            </h1>`,
            `<h1>
                Extraño bullicio despierta al Señor,<br/>
                Mas no llora el Niño, pues es puro amor;<br/>
                ¡Oh vélanos, Cristo Jesús, sin cesar!<br/>
                Y así bien felices siempre hemos de estar. Amén
            </h1>`,
        ]
    },
    30: {
        tonalidad: 'G',
        versos: [
            `<h1>
                A medianoche en Belén un canto sin igual<br/>
                de dulces notas se oyó sublime y celestial:<br/>
                “En las alturas gloria a Dios y al mundo salvación;<br/>
                al hombre buena voluntad y paz al corazón”.
            </h1>`,
            `<h1>    
                El canto de los ángeles aún se oye sonar;<br/>
                su eco dulce, arrobador, alivia mi pesar.<br/>
                Por sobre el mundo de maldad y el ruido terrenal,<br/>
                se escucha hoy la tierna voz del canto angelical.
            </h1>`,
            `<h1>    
                Viajero que por la vida vas cansado y con temor,<br/>
                que asciendes con dificultad la senda del dolor;<br/>
                detente y contempla ya la angélica visión;<br/>
                si prestas atención, oirás la celestial canción.
            </h1>`,
        ]
    },
    31: {
        tonalidad: 'D',
        versos: [
            `<h1>
                ¡CAMPANA POR DOQUIER<br/>
                RESUENAN SIN CESAR,<br/>
                PROCLAMAN CON PLACER<br/>
                QUE HOY ES NAVIDAD
            </h1>`,
            `<h1>    
                LOS NIÑOS CON CANCIÓN<br/>
                LA GRATA NUEVA DAN<br/>
                DE ESTE DÍA DE AMOR<br/>
                Y BUENA VOLUNTAD.
            </h1>`,
            `<h1>    
                NAVIDAD, NAVIDAD,<br/>
                HOY ES NAVIDAD,<br/>
                ES UN DÍA DE ALEGRÍA<br/>
                Y FELICIDAD
            </h1>`,
            `<h1>
                EL NIÑO DE BELÉN<br/>
                NOS TRAE LA SALVACIÓN<br/>
                CON JUBILO SIN PAR<br/>
                SE ENTONA LA CANCIÓN:
            </h1>`,
            `<h1>    
                YO TE AMO, MI SEÑOR,<br/>
                TUS GLORIAS CANTARÉ,<br/>
                EN ESTE DÍA TAN FELIZ<br/>
                ME REGOCIJARÉ.
            </h1>`,
        ]
    },
    32: {
        tonalidad: 'D',
        versos: [
            `<h1>
                Oíd un son en alta esfera:<br/>
                “¡en los cielos gloria a Dios!<br/>
                ¡Al mortal paz en la tierra!”<br/>
                Canta la celeste voz,
            </h1>`,
            `<h1>    
                Con los cielos alabemos,<br/>
                Al eterno Rey cantemos<br/>
                A Jesús que es nuestro bien<br/>
                Con el coro de Belén<br/>
                Canta la celeste voz:<br/>
                “¡en los cielos gloria a Dios!”
            </h1>`,
            `<h1>    
                El Señor de los señores,<br/>
                El Ungido celestial,<br/>
                A salvar los pecadores<br/>
                Vino al mundo terrenal.
            </h1>`,
            `<h1>    
                Gloria al Verbo encarnado,<br/>
                En humanidad velado;<br/>
                Gloria al Santo de Israel,<br/>
                Cuyo nombre es Emmanuel;<br/>
                Canta la celeste voz:<br/>
                “¡En los cielos gloria a Dios!”
            </h1>`,
            `<h1>    
                Príncipe de paz eterna,<br/>
                Gloria a ti, Señor Jesús;<br/>
                Entregando el alma tierna,<br/>
                Tú nos traes vida y luz.
            </h1>`,
            `<h1>    
                Has tu majestad dejado,<br/>
                Y buscarnos te has dignado;<br/>
                Para darnos el vivir,<br/>
                A la muerte quieres ir.<br/>
                Canta la celeste voz:<br/>
                “¡En los cielos gloria a Dios!
            </h1>`,
        ]
    },
    33: {
        tonalidad: 'D',
        versos: [
            `<h1>
                Ve, dilo en las montañas,<br/>
                En todas partes y alrededor<br/>
                Ve, dilo en las montañas<br/>
                Que Cristo el Rey nació.
            </h1>`,
            `<h1>    
                Pastores, sus rebaños<br/>
                De noche al cuidar,<br/>
                Con gran sorpresa vieron<br/>
                Gloriosa luz brillar.
            </h1>`,
            `<h1>    
                Ve, dilo en las montañas,<br/>
                En todas partes y alrededor<br/>
                Ve, dilo en las montañas<br/>
                Que Cristo el Rey nació.
            </h1>`,
            `<h1>    
                En un pesebre humilde<br/>
                El Cristo ya nació<br/>
                De Dios amor sublime<br/>
                Al mundo descendió.
            </h1>`,
            `<h1>    
                Ve, dilo en las montañas,<br/>
                En todas partes y alrededor<br/>
                Ve, dilo en las montañas<br/>
                Que Cristo el Rey nació.
            </h1>`,
        ]
    },
    34: {
        tonalidad: 'D',
        versos: [
            `<h1>
                Venid, fieles todos a Belén marchemos<br/>
                De gozo triunfantes henchidos de amor,<br/>
                Y al Rey de los cielos contemplar podremos:
            </h1>`,
            `<h1>    
                Coro:<br/>
                Venid, adoremos, venid, adoremos,<br/>
                Venid, adoremos a Cristo el Señor.
            </h1>`,
            `<h1>   
                El que es Hijo eterno del eterno Padre,<br/>
                Y Dios verdadero que al mundo creó,<br/>
                Al seno virgíneo vino de una madre:<br/>
            </h1>`,
            `<h1>    
                Coro:<br/>
                Venid, adoremos, venid, adoremos,<br/>
                Venid, adoremos a Cristo el Señor.
            </h1>`,
            `<h1>
                En pobre pesebre yace reclinado,<br/>
                Al hombre ofreciendo eternal salvación,<br/>
                El Santo Mesías, Verbo humanado:
            </h1>`,
            `<h1>    
                Coro:<br/>
                Venid, adoremos, venid, adoremos,<br/>
                Venid, adoremos a Cristo el Señor.
            </h1>`,
            `<h1>
                Cantad jubilosas, célicas criaturas,<br/>
                Resuenen los cielos con vuestra canción.<br/>
                ¡Al Dios bondadoso, gloria en las alturas!
            </h1>`,
            `<h1>    
                Coro:<br/>
                Venid, adoremos, venid, adoremos,<br/>
                Venid, adoremos a Cristo el Señor.
            </h1>`,
            `<h1>
                Jesús, celebramos tu bendito nombre<br/>
                Con himnos solemnes de grato loor;<br/>
                Por siglos eternos que te adore el hombre
            </h1>`,
            `<h1>    
                Coro:<br/>
                Venid, adoremos, venid, adoremos,<br/>
                Venid, adoremos a Cristo el Señor.
            </h1>`,
        ]
    },
    35: {
        tonalidad: '',
        versos: [
            `<h1>
                In the bleak midwinter frosty wind made moan<br/>
                Earth stood hard as iron, water like a stone<br/>
                Snow had fallen, snow on snow, snow on snow<br/>
                In the bleak midwinter long ago
            </h1>`,
            `<h1>
                Our God, heav’n cannot hold Him nor earth sustain<br/>
                Heav’n and earth shall flee away when He comes to reign<br/>
                In the bleak midwinter a stable place sufficed<br/>
                For the Lord, God Almighty, Jesus Christ
            </h1>`,
            `<h1>
                Gloria, Gloria! Now my eyes have seen<br/>
                Soli Deo Gloria! He salvation brings<br/>
                As the Lord has promised, I may go in peace
            </h1>`,
            `<h1>
                What can I give Him poor as I am<br/>
                If I were a shepherd I would bring a lamb<br/>
                If I were a Wise Man I would do my part<br/>
                Yet what can I give him? Give my heart
            </h1>`,
            `<h1>
                // Gloria, Gloria! Now my eyes have seen<br/>
                Soli Deo Gloria! He salvation brings //<br/>
                In the bleak midwinter I may go in peace<br/>
                As the Lord has promised, I may go in peace
            </h1>`,
        ]
    },
    36: {
        tonalidad: '',
        versos: [
            `<h1>
                Jesus, joy of the highest heaven,<br/>
                Born as a little baby<br/>
                Under a wondrous star.<br/>
                Like us, crying he takes His first breath<br/>
                Held by His mother, helpless<br/>
                Close to her beating heart.
            </h1>`,
            `<h1>
                Jesus, laid in a lowly manger,
                Facing a world of dangers,
                Come to turn me a stranger
                Into a child of God.
            </h1>`,
            `<h1>
                Jesus, King of the highest heaven<br/>
                Learning to take His first steps,<br/>
                That He might bring us life.<br/>
                Like us, knowing our smiles and sorrows,<br/>
                He showed the way to follow,<br/>
                A way that is true and right.
            </h1>`,
            `<h1>
                Jesus, take away every darkness,<br/>
                Steady my simple footsteps<br/>
                That I might in your goodness<br/>
                Live as a child of God.
            </h1>`,
        ]
    },
    37: {
        tonalidad: '',
        versos: [
            `<h1>
                Jesus loves me, this I know<br/>
                for the Bible tells me so.<br/>
                Little ones to Him belong,<br/>
                they are weak but He is strong.
            </h1>`,
            `<h1>
                Yes, Jesus loves me!<br/>
                Yes, Jesus loves me!<br/>
                Yes, Jesus loves me!<br/>
                The Bible tells me so.<br/>
                The Bible tells me so.
            </h1>`,
            `<h1>
                Jesus, tender Shepherd, hear me,<br/>
                bless Thy little lamb tonight.<br/>
                Through the darkness be Thou near me.<br/>
                Watch my sleep till morning light.
            </h1>`,
            `<h1>
                When I’m troubled and afraid<br/>
                I will trust in Thee and pray.<br/>
                Jesus, tender Shepherd, hear me,<br/>
                bless Thy little lamb tonight,<br/>
                bless Thy little lamb tonight.
            </h1>`,
            `<h1>
                All this day Thy hand has led me,<br/>
                and I thank Thee for Thy care;<br/>
                Thou has clothed me, warmed and fed me,<br/>
                listen to my evening prayer.
            </h1>`,
            `<h1>
                When I’m troubled and afraid<br/>
                I will trust in Thee and pray.<br/>
                Jesus, tender Shepherd, hear me,<br/>
                bless Thy little lamb tonight,<br/>
                bless Thy little lamb tonight.
            </h1>`,
            `<h1>
                Yes, Jesus loves me!<br/>
                Yes, Jesus loves me!<br/>
                Yes, Jesus loves me!<br/>
                The Bible tells me so.<br/>
                The Bible tells me so.
            </h1>`,
        ]
    },
    38: {
        tonalidad: '',
        versos: [
            `<h1>
                Al mundo paz, nació Jesús,<br/>
                nació ya nuestro Rey,<br/>
                el corazón ya tiene luz,<br/>
                y paz su santa grey,<br/>
                y paz su santa grey,<br/>
                y paz, y paz su santa grey.
            </h1>`,
            `<h1>
                Al mundo paz, el Salvador<br/>
                en Tierra reinará.<br/>
                Ya es feliz el pecador.<br/>
                Jesús perdón le da<br/>
                Jesús perdón le da,<br/>
                Jesús, Jesús perdón le da.
            </h1>`,
            `<h1>
                Al mundo paz, gobernará<br/>
                con gracia y con poder:<br/>
                a las naciones probará<br/>
                su amor y su poder<br/>
                su amor y su poder<br/>
                su amor, su amor y su poder.
            </h1>`,
        ]
    },
    39: {
        tonalidad: '',
        versos: [
            `<h1>
                Levántate, Iglesia del Señor<br/>
                cálzate tu armadura!<br/>
                Pues en Jesús, nuestro Gran Capitán<br/>
                está nuestra fortaleza
            </h1>`,
            `<h1>
                Con el escudo de la fe<br/>
                al diablo no hemos de tem<br/>er
                Ejército, armado de Amor<br/>
                ve y alcanza a los perdidos
            </h1>`,
            `<h1>
                Es tu misión, al mundo alcanzar<br/>
                y enfrentar al enemigo<br/>
                Con fe y valor batalla hemos de dar<br/>
                la Palabra es nuestra espada
            </h1>`,
            `<h1>
                Aunque haya pruebas por doquier<br/>
                no hay imposibles para Él<br/>
                Y así tendrá, lo que buscó al morir<br/>
                una herencia de naciones
            </h1>`,
            `<h1>
                Y allí en la cruz de amor y compasión<br/>
                vemos a Cristo asolado<br/>
                Mas aplastados yacen a los pies<br/>
                del Señor sus enemigos
            </h1>`,
            `<h1>
                Conquistador, se levantó<br/>
                es Cristo que resucitó<br/>
                Se cantará su triunfo hasta que<br/>
                todo ojo pueda verlo
            </h1>`,
            `<h1>
                Por gracia, oh Dios, infúndenos valor<br/>
                Danos fuerza a cada paso<br/>
                Danos la fe para el premio obtener<br/>
                de un siervo fiel y bueno
            </h1>`,
            `<h1>
                Las voces de quienes ayer<br/>
                confiaron en tu provisión<br/>
                aliento son en nuestro caminar<br/>
                hasta estar con Él por siempre
            </h1>`,
        ]
    },
    40: {
        tonalidad: '',
        versos: [
            `<h1>
               Venid, glorificad a Dios<br/>
                El Padre del Señor<br/>
                En Cristo Él nos derramó<br/>
                Su eterna bendición 
            </h1>`,
            `<h1>
                Sin manchas, puros en su luz<br/>
                Nos destinó a ser<br/>
                Sus hijos adoptados<br/>
                Por la sangre de Jesús
            </h1>`,
            `<h1>
                Te daremos la gloria<br/>
                Por tu gracia, bondad y amor<br/>
                Te daremos la gloria<br/>
                ¡Eres el salvador!
            </h1>`,
            `<h1>
                Venid, glorificad a Dios<br/>
                Que en Cristo gracia da<br/>
                Lavadas nuestras culpas son<br/>
                Tenemos redención
            </h1>`,
            `<h1>
                En Él Dios ya nos reveló<br/>
                Su eterna voluntad<br/>
                Que sea Cristo el Señor<br/>
                Su plan se cumplirá
            </h1>`,
            `<h1>
                Te daremos la gloria<br/>
                Por tu gracia, bondad y amor<br/>
                Te daremos la gloria<br/>
                ¡Eres el salvador!
            </h1>`,
            `<h1>
                Venid, glorificad a Dios<br/>
                Creyentes del Señor<br/>
                El sello de su Espíritu<br/>
                Por fe tenemos hoy
            </h1>`,
            `<h1>
                Él garantiza nuestra fe<br/>
                Hasta el día final<br/>
                Nos uniremos a alabar<br/>
                A nuestro trino Dios
            </h1>`,
            `<h1>
                // Te daremos la gloria<br/>
                Por tu gracia, bondad y amor<br/>
                Te daremos la gloria<br/>
                ¡Eres el salvador! //
            </h1>`,
        ]
    },
}
//--------------------Playlists------------------
let playlistKey = {
    allSongs: [],
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: []
}


for (const keyIndex in letra) {
    playlistKey.allSongs.push(keyIndex)
    const tonalidad = letra[keyIndex]['tonalidad']
    if (playlistKey.hasOwnProperty(tonalidad)) {
        playlistKey[tonalidad].push(keyIndex)
    }
}

console.log(playlistKey);

//--------------------Indexes--------------------
let indexCanciones = 0
let indexVersos = 0
let currentPlaylistKey = 'C'
//--------------------Modifying HTML--------------------
tonalidad.innerHTML = letra[playlistKey[currentPlaylistKey][indexCanciones]].tonalidad
verso.innerHTML = letra[playlistKey[currentPlaylistKey][indexCanciones]].versos[indexVersos]
//--------------------Simple functions--------------------
const incrementarIndexCanciones = () => {
    indexCanciones ++
}
const disminuirIndexCanciones = () => {
    indexCanciones --
}
const incrementarIndexVersos = () => {
    indexVersos ++
}
const disminuirIndexVersos = () => {
    indexVersos --
}
const indexVersosCero = () => {
    indexVersos = 0
}
const indexCancionesCero = () => {
    indexCanciones = 0
}
const cambiarInnerHTML = () => {
    // verso.innerHTML = letra[indexCanciones].versos[indexVersos]
    // tonalidad.innerHTML = letra[indexCanciones].tonalidad
    tonalidad.innerHTML = letra[playlistKey[currentPlaylistKey][indexCanciones]].tonalidad
    verso.innerHTML = letra[playlistKey[currentPlaylistKey][indexCanciones]].versos[indexVersos]
}
const crearPuntos = () => {
    for(let i = 0; i < letra[playlistKey[currentPlaylistKey][indexCanciones]].versos.length; ++i){
        let dot = document.createElement('span')
        dot.setAttribute('class', `dot dot${i}`)
        dotsContainer.appendChild(dot)
    }
}
const eliminarPuntos = () => {
    dotsContainer.replaceChildren()
}
const colorear = () => {
    const colored = document.querySelector(`.dot${indexVersos}`)
    colored.classList.add('colored')
}
const quitarColor = () => {
    const unColored = document.querySelector(`.dot${indexVersos + 1}`)
    unColored.classList.remove('colored')
}

//--------------------Combining simple functions--------------------
const pasarVerso = () => {
    if(indexVersos < letra[playlistKey[currentPlaylistKey][indexCanciones]].versos.length - 1){
        incrementarIndexVersos()
        cambiarInnerHTML()
    }
}
const volverVerso = () => {
    if(indexVersos > 0){
        disminuirIndexVersos()
        cambiarInnerHTML()
    }
}
const cambiarPuntos = () => {
    eliminarPuntos()
    crearPuntos()
    colorear()
}
const pasarCancion = () => {
    if(indexCanciones < playlistKey[currentPlaylistKey].length - 1){
        incrementarIndexCanciones()
        indexVersosCero()
        cambiarInnerHTML()
        cambiarPuntos()
    }
}
const volverCancion = () => {
    if(indexCanciones > 0){
        disminuirIndexCanciones()
        indexVersosCero()
        cambiarInnerHTML()
        cambiarPuntos()
    }
}
const changePlaylistKey = (newPlaylistKey) => {
    if(letra[playlistKey[newPlaylistKey][indexCanciones]]){
        currentPlaylistKey = newPlaylistKey
        indexVersosCero()
        indexCancionesCero()
        cambiarPuntos()
    }else{
        window.alert(`La lista de canciones en ${newPlaylistKey} está vacía.`)
    }
}
//--------------------Event Listeners--------------------
document.addEventListener('onload', crearPuntos(), colorear())
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowDown':
            pasarVerso()
            colorear()
            break;
        case 'ArrowUp':
            volverVerso()
            quitarColor()
            break;
        case 'ArrowRight':
            pasarCancion()
            break;
        case 'ArrowLeft':
            volverCancion()
            break;
        case 't':
            tonalidad.classList.toggle('hide')
            break;
        case '1':
            changePlaylistKey('A')
            cambiarInnerHTML()
            break;
        case '2':
            changePlaylistKey('B')
            cambiarInnerHTML()
            break;
        case '3':
            changePlaylistKey('C')
            cambiarInnerHTML()
            break;
        case '4':
            changePlaylistKey('D')
            cambiarInnerHTML()
            break;
        case '5':
            changePlaylistKey('E')
            cambiarInnerHTML()
            break;
        case '6':
            changePlaylistKey('F')
            cambiarInnerHTML()
            break;
        case '7':
            changePlaylistKey('G')
            cambiarInnerHTML()
            break;
        case '0':
            changePlaylistKey('allSongs')
            cambiarInnerHTML()
            break;
        case 'c':
            comandos.classList.toggle('showCommands')
            break;
        
    }
    // if (event.key === 'ArrowDown') {
    //     pasarVerso()
    //     colorear()
    // }else if (event.key === 'ArrowUp') {
    //     volverVerso()
    //     quitarColor()
    // }else if (event.key === 'ArrowRight'){
    //     pasarCancion()
    // }else if (event.key === 'ArrowLeft'){
    //     volverCancion()
    // }else if(event.key === 't'){
    //     tonalidad.classList.toggle('hide')
    // }
    // else if(event.key === 'a' || event.key === 'b' || event.key === 'c' || event.key === 'd' ||
    //  event.key === 'e' || event.key === 'f' || event.key === 'g'){
    //     playlistKey = []
    //     for (const [key, value] of Object.entries(letra)) {
    //         if (value.tonalidad === event.key.toUpperCase()) {
    //           playlistKey.push(key)
    //         }
    //     }
    //     console.log(playlistKey)
    //  }
})