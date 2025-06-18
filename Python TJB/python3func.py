import sqlite3

def checkTableExists(dbcon, tablename):
    dbcur = dbcon.cursor()
    dbcur.execute(
    """
    "SELECT *
    FROM atributos
    WHERE table_name = '{atributos}'
    """
    ).format(tablename.replace('\'', '\'\''))
    if dbcur.fetchone()[0] == 1:
        dbcur.close()
        return True
    
    dbcur.close
    return False
                                  