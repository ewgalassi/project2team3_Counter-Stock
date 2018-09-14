# project2team3
GO TEAM 3

Proposal:

Title: COUNTER STOCK
Members: Alejandro Gonzalez, Eric Galassi, Mommin Ahmad, Spencer Vigil, Thomas Milnes 

Link:
https://hidden-fortress-38316.herokuapp.com/

Quick Description: A multiplayer fight based RPG with attributes determined by real time stock prices.

Detailed Process (working):
    User creates a profile and picks from a list of stocks to fight with
    User is able to pick from a database of stocks with an initial value of $X
    Move to the "Fight" page to see the list of players and their $ value and name
    Player can choose from the list of players and decide to "fight" them
    Strength is based on the % change of their stock and a random multiplier
    $ value * random multiplier = strength
    Higher strength wins $100 of their own stock and lower strength loses $100 of their stock
    After being alerted and updated of the result player is back to fight page to choose next action
 


//Development Stages

Stage 1: 
    Front end:
        create basic handlebar pages
    Back End:
        create the tables and set up server
        verify everything is running correctly
        Connect to stocks API
Stage 2: 
    Front end:
        create log in page and a fight page
        js code to enable user to create a log in and view other players
    Back End:
         Create routes for log in and switching pages
Stage 3: 
    Front end:
        Style and animate UI
        
    Back End:
         Create fight logic
         Add in 
         Make sure database updates total value daily (daily value will be (previoue days value * %change of stock value) )
         Create Authenication for log in (Thomas)

    
Stage 4: 
    Test and add in any icebox functionality that we have time for
    Create presentation

Stage 5:
    Present
  
Rough Breakdown of Tasks  - 

Alejandro Gonzalez, Eric Galassi, Mommin Ahmad, Spencer Vigil, Thomas Milnes

Alejandro Gonzalez - UI and design
Eric Galassi - .js wizard 
Momin Amad - Creating Database and API 
Spencer Vigil - Connect front end to back end transition to front end
Thomas Milnes - Connect front end to back end transition to front end


List of Stock Tickers

Highly Volatile:

FRED
NLST
RMNI
BLPH
NVMM
RSLS
TLRY
PRQR
NMIH
SRNE

Top 10 growth this year:

MILN
JSMD
ARVR
SQLV
BOSS
TTAC
JSML
FLQS
SCAP
XITK

Popular 20:
AAPL
INTC
GOOG
AMZN
MSFT
AZO
PFE
NFLX
FB
BRK-A
BABA
JNJ
JPM
XOM
BAC
WMT
WFC
V
PG
BUD
