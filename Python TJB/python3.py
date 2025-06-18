import sqlite3
import python3func

cx = sqlite3.connect("DND.db")

cu = cx.cursor()

if python3func.checkTableExists == False:
    cu.execute("create table atributos(id PRIMARY KEY, STR default 8, DEX INTEGER default 8, CON INTEGER default 8, WIS INTEGER default 8, CAR INTEGER default 8, INT INTEGER default 8 )")

cu.execute("insert into atributos values (?, ?, ?, ?, ?, ?, ?)", (1, 15, 14, 13, 12, 10, 8))

for row in cu.execute("select * from atributos"):{
    print(row)
}

cx.close()