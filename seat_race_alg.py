import numpy as np
from scipy.stats import norm

def give_new(old,new):
    for rower in new:
        if rower not in old:
            return rower
        
def switch_q(b1p1,b2p1,b1p2,b2p2):
    still = 0
    for rower in b1p1:
        if rower in b1p2:
            still +=1
    if still == 3:
     #   print('n')
        return('N')
    
    still = 0
    for rower in b1p1:
        if rower in b2p2:
            still +=1
    if still == 3:
    #    print('f')
        return('F')
    
    else: return False
       
def clean(b1_p1,b2_p1,b1_p2,b2_p2,mar_p1,mar_p2,dis_p1,dis_p2,win_p1,win_p2):
    boats=[b1_p1,b2_p1,b1_p2,b2_p2]
    margins=[mar_p1,mar_p2]
    distances=[dis_p1,dis_p2]
    winners=[win_p1,win_p2]
    return (boats,margins,distances,winners)

def find_res(piece1,piece2):
    #figure out who is new in each boat
    _1to2 = give_new(piece1['b2'],piece2['b2'])
    _2to1 = give_new(piece1['b1'],piece2['b1'])
    #find differences in boat split for each piece
    p1_split_dif = piece1['mar']*500/piece1['dis']
    p2_split_dif = piece2['mar']*500/piece2['dis']
    #decide if boat 1 won either piece
    b1_v_p1 = (piece1['win'] == 1)
    b1_v_p2 = (piece2['win'] == 1)
    #find how much faster boat 1 was on each piece and then  
    #figure out how much relatively faster boat 1 got (can be negative!)
    b1_adv_p1 = p1_split_dif
    if not b1_v_p1: b1_adv_p1 *= -1
    b1_adv_p2 = p2_split_dif
    if not b1_v_p2: b1_adv_p2 *= -1
    b1_faster = b1_adv_p2-b1_adv_p1
    if b1_faster >= 0:
        return (_2to1,_1to2,(b1_faster/2))
    if b1_faster <0:
        return (_1to2,_2to1,-(b1_faster/2))
    
def get_conf(better):
    sd = 1
    dist = norm(loc=better,scale=sd)
    conf = str(int((.5 - dist.cdf(0))*200))+"%"
    return conf
    
def the_alg(p1,p2):
    first = find_res(p1,p2)
    win,los,better = first
    conf = get_conf(better)
    return (win,los,better,conf)    

def beaut_out(win,los,conf):
    return(str(win)+" is faster than "+str(los)+" with confidence "+str(conf))
    
def make_pairs(pieces):
    seat_races = []
    used = []
    for i in pieces:
        for j in pieces:

            res = switch_q(i['b1'],i['b2'],j['b1'],j['b2'])

            if res == 'N':
                if (j['p'],i['p']) not in used: 
                    seat_races.append((i,j))
                    used.append((i['p'],j['p']))
            if res == 'F':
                nj = j.copy()
                nj['b1'] = j['b2']
                nj['b2'] = j['b1']
                if j['win'] == 1: nj['win'] = 2
                if j['win'] == 2: nj['win'] = 1 
                if (nj['p'],i['p']) not in used: 
                    seat_races.append((i,nj))
                    used.append((i['p'],nj['p']))
    return seat_races

def run_full_boi(pieces):
    pairs = make_pairs(pieces)
    dic = {}
    for i in pairs:
        win,los,better,conf = the_alg(i[0],i[1])
        print(beaut_out(win,los,conf))
        
        if win in dic:
            dic[win]= dic[win].append((better,los))
        else:
            dic[win]=[(better,los)]
            
        if los in dic:
            dic[los]= dic[los].append((-better,win))
        else:
            dic[los]=[(-better,win)]
            
        '''    for rower in dic.keys():
        ress = dic[rower]
        for race in ress:
            better,opp = race'''
            
    
    return

###############################################

#To Edit

############################################### 



piece1 = {'b1' : ["Orrie","Cooper","James","Ben"],
'b2' : ["Alison","Ian","Sinan","Liam"],
'win' : 1,
'mar' : 21,
'dis' : 2000,
'p':1}


piece2 = {'b1' : ["Alison","Cooper","James","Ben"],
'b2' : ["Orrie","Ian","Sinan","Liam"],
'win' : 1,
'mar' : 12,
'dis' : 2000,
'p':2}

piece3 = {'b1' : ["Alison","Cooper","Sinan","Ben"],
'b2' : ["Orrie","Ian","James","Liam"],
'win' : 2,
'mar' : 3,
'dis' : 1900,
'p':3}

piece4 = {'b1' : ["Alison","Cooper","Sinan","Liam"],
'b2' : ["Orrie","Ian","James","Ben"],
'win' : 2,
'mar' : 14,
'dis' : 2000,
'p':4}

piece5 = {'b1' : ["James","Cooper","Sinan","Liam"],
'b2' : ["Orrie","Ian","Alison","Ben"],
'win' : 1,
'mar' : 2,
'dis' : 1870,
'p':5}


all_pieces = [piece1,piece2,piece3,piece4,piece5]

run_full_boi(all_pieces)
















