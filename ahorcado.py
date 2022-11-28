import random

palabras = ['hola','juan','juguete','teclado','piso','raton','niño','patineta','celular','pantalla']

MAX_FALLAS = 6

palabra_sorteada = random.randint(0,10)

elegida = palabras[palabra_sorteada]

print('palabra_sorteada: ', elegida)

print('Elegir Palabra')

intentos_fallidos = 0

GANO = False

acertadas = []

largo_palabra_elegida = len(elegida)

while(intentos_fallidos < MAX_FALLAS and not GANO):

    letra = input('INGRESAR LETRA : ')

    if letra in elegida:
        print('acerto letra!')
        result = '' 
        acertadas.append(letra)
        for l in elegida:
            if l in acertadas:
                result = result + l
            else:
                result = result + '_'
        print('RESULTADO HASTA EL MOMENTO: ', result)
        print('largo acertadas: ', len(acertadas))
        print('largo PALABRA ELEGIDA: ', largo_palabra_elegida)
        if '_' not in result:
            print('GANO.!')        
            GANO = True    
    else:
        print('FALLO!')
        intentos_fallidos = intentos_fallidos +1
        print('Cantidad de Fallos al momento: ', intentos_fallidos)


if intentos_fallidos == MAX_FALLAS:
    print('USTED AH PERDIDO **')
elif GANO:
    print('USTED AH GANADO--!')

print('FIN DEL PROGRAMA! :)')