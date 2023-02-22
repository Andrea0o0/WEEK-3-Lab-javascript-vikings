// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(the_damage){
        this.health-=the_damage
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength)
        this.health = health
        this.strength = strength
        this.name = name
    }

    attack(){
        return this.strength
    }

    receiveDamage(the_damage){
        this.health-=the_damage
        if(this.health > 0){
          return `${this.name} has received ${the_damage} points of damage`
        }
        else{
          return `${this.name} has died in act of combat`
        }
      }

  
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength)
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(the_damage){
        this.health -= the_damage
        if(this.health>0){
          return `A Saxon has received ${the_damage} points of damage`
        }
        else{
          return `A Saxon has died in combat`
        }
      }
      
}

// War

class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(a_Viking_object){
        this.vikingArmy.push(a_Viking_object)
    }

    addSaxon(a_Saxon_object){
        this.saxonArmy.push(a_Saxon_object)
    }

    //ARMIES ATTACK
    vikingAttack(){
        const i_r_viking = [Math.floor(Math.random() * this.vikingArmy.length)]
        const r_viking = this.vikingArmy[i_r_viking]
        const i_r_saxon = [Math.floor(Math.random() * this.saxonArmy.length)]
        const r_saxon = this.saxonArmy[i_r_saxon]
       
        const equal_damage = r_saxon.receiveDamage(r_viking.strength)

        //REMOVE DEAD SAXONS
        if(r_saxon.health <= 0){
            this.saxonArmy.splice(i_r_saxon,1)
        }

        return equal_damage
    }

    saxonAttack(){
        const i_r_viking = [Math.floor(Math.random() * this.vikingArmy.length)]
        const r_viking = this.vikingArmy[i_r_viking]
        const i_r_saxon = [Math.floor(Math.random() * this.saxonArmy.length)]
        const r_saxon = this.saxonArmy[i_r_saxon]
       
        const equal_damage = r_viking.receiveDamage(r_saxon.strength)

        //REMOVE DEAD VIKINGS
        if(r_viking.health <= 0){
            this.vikingArmy.splice(i_r_viking,1)
        }

        return equal_damage
    }

    showStatus(){
        if(this.saxonArmy.length<=0){
            return `Vikings have won the war of the century!`
        }
        if(this.vikingArmy.length<=0){
            return `Saxons have fought for their lives and survived another day...`
        }
        if(this.vikingArmy.length>0 & this.saxonArmy.length>0){
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}

