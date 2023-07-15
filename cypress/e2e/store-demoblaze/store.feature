Feature:  demoblaze store transaction

#Scenario: Ali wants to buy samsung galaxy phone S6, but he want consider another in another e-commerce, so he want to just save the goods to the carts

    #Given --> Arrange , When --> , Then --> Assert

#Given Ali view samsung Galaxy S6 phone information detail
#When Ali likes it, He add the phone to the cart
#Then He can see the goods in the cart

#Scenario: John ingin melakukan logout karena ia menggunakan PC perpustakaan

#Given John selesai melakukan pencarian di website demoblaze
#When John lalu memilih menu logout
#Then akun John terlogout dari demoblaze

Scenario: Budi mengunjungi website demoblaze untuk melakukan pembelian smartphone

Given Budi memilih smartphone
When Budi memasukan smartphone ke cart
And lalu Budi memastikan barang yang di beli
And memasukan data untuk melakukan pembelian Mobile
Then Budi selesai melakukan pembelian


