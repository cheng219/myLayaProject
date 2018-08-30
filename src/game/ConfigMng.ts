/*
* name;
*/
class ConfigMng{
    constructor(){

    }
    /**主角移动速度=6 */
    public static selfMoveSpeed : number = 6;
    /**敌人移动速度=4*/
    public static enemyMoveSpeed : number = 4;
    /**主角子弹速度=10 */
    public static selfBulletSpeed : number = 10;
    /**主角子弹速度=8 */
    public static enemyBulletSpeed : number = 8;
    /** 攻击间隔1秒 */
    public static attackCd : number = 100;//500
    /** 敌人自动攻击间隔2秒 */
    public static autoAttackCd : number = 2000;
    /** 敌人遇到障碍转向间隔0.2秒 */
    public static autoTurnCd : number = 200;
    /**子弹碰撞宽度 */
    public static bulletWidth : number = 2;
    /**坦克和砖块碰撞宽度 */
    public static tanktWidth : number = 60;


}