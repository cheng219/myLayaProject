/*
* name;
*/
var ConfigMng = /** @class */ (function () {
    function ConfigMng() {
    }
    /**主角移动速度=6 */
    ConfigMng.selfMoveSpeed = 6;
    /**敌人移动速度=4*/
    ConfigMng.enemyMoveSpeed = 4;
    /**主角子弹速度=10 */
    ConfigMng.selfBulletSpeed = 10;
    /**主角子弹速度=8 */
    ConfigMng.enemyBulletSpeed = 8;
    /** 攻击间隔1秒 */
    ConfigMng.attackCd = 100; //500
    /** 敌人自动攻击间隔2秒 */
    ConfigMng.autoAttackCd = 2000;
    /** 敌人遇到障碍转向间隔0.2秒 */
    ConfigMng.autoTurnCd = 200;
    /**子弹碰撞宽度 */
    ConfigMng.bulletWidth = 2;
    /**坦克和砖块碰撞宽度 */
    ConfigMng.tanktWidth = 60;
    return ConfigMng;
}());
//# sourceMappingURL=ConfigMng.js.map