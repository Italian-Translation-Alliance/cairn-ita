#!/bin/bash
# This creates a printable PDF of all the monster cards in both Letter and A4 formats.
#montage "/mnt/c/Users/utente/Documents/GitHub/cairn-ita/build/carte-mostro/*.png" -mode concatenate -tile 3x3 -geometry +20+20 -page letter -rotate 90 "/mnt/c/Users/utente/Documents/GitHub/cairn-ita/build/cairn-bestiary-cards-letter.pdf"
montage "/mnt/c/Users/utente/Documents/GitHub/cairn-ita/build/carte-mostro/*.png" -mode concatenate -tile 3x3 -geometry +20+20 -page a4 -rotate 90 "/mnt/c/Users/utente/Documents/GitHub/cairn-ita/build/cairn-bestiary-cards-a4.pdf"
