function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    const maxHP = health;
    let time = 0;
    
    for(const [attackTime, attackHP] of attacks) {
        const continued = attackTime - time - 1;
        
        // success
        health += continued * x;
        if(continued >= t) {
            health += Math.floor(continued / t) * y;
        }
        if(health > maxHP) health = maxHP;
        
        //attack
        health -= attackHP;
        time = attackTime;
        
        if(health <= 0) return -1;
    }
    
    return health;
}