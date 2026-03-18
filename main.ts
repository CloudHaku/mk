function 鐵工廠 () {
    地面基準 += 2
    Make9(9, 9, 地面基準 + 0)
    builder.teleportTo(Point9[9])
    builder.mark()
    Make9(9, 9, 地面基準 + 5)
    builder.teleportTo(Point9[1])
    builder.fill(CHISELED_QUARTZ_BLOCK)
    Make9(8, 8, 地面基準 + 5)
    builder.teleportTo(Point9[9])
    builder.mark()
    Make9(8, 8, 地面基準 + 1)
    builder.teleportTo(Point9[1])
    builder.fill(AIR)
    Make9(8, 8, 地面基準 + 1)
    builder.teleportTo(Point9[9])
    builder.mark()
    builder.teleportTo(Point9[1])
    builder.fill(CHISELED_QUARTZ_BLOCK)
    Make9(8, 8, 地面基準 + 2)
    builder.teleportTo(Point9[9])
    builder.mark()
    builder.teleportTo(Point9[1])
    builder.fill(WATER)
    Make9(7, 7, 地面基準 + 1)
    builder.teleportTo(Point9[9])
    builder.mark()
    Make9(7, 7, 地面基準 + 2)
    builder.teleportTo(Point9[1])
    builder.fill(AIR)
    Make9(8, 8, 地面基準 + 2)
    for (let index = 0; index <= 3; index++) {
        blocks.place(IRON_BLOCK, Point9[list[index]])
    }
    Make9(8, 8, 地面基準 + 3)
    for (let index = 0; index <= 3; index++) {
        blocks.place(WATER, Point9[list[index]])
    }
}
function 初始 () {
    while (地面基準 > -5) {
        Make9(13, 13, 地面基準)
        builder.teleportTo(Point9[9])
        builder.mark()
        builder.teleportTo(Point9[1])
        builder.fill(AIR)
        blocks.place(SEA_LANTERN, Point9[5])
        地面基準 += -1
    }
}
player.onChat("Layout", function () {
    for (let index = 0; index <= 7; index++) {
        Make9(11, 11, index)
        blocks.place(SAND, Point9[1])
        blocks.place(SAND, Point9[3])
        blocks.place(SAND, Point9[7])
        blocks.place(SAND, Point9[9])
    }
    blocks.place(SAND, Point9[5])
})
function Make9 (東西: number, 南北: number, 高: number) {
    Point9 = [
    中心點,
    positions.add(
    中心點,
    pos(東西 * -1, 高, 南北 * -1)
    ),
    positions.add(
    中心點,
    pos(東西 * 0, 高, 南北 * -1)
    ),
    positions.add(
    中心點,
    pos(東西 * 1, 高, 南北 * -1)
    ),
    positions.add(
    中心點,
    pos(東西 * -1, 高, 南北 * 0)
    ),
    positions.add(
    中心點,
    pos(東西 * 0, 高, 南北 * 0)
    ),
    positions.add(
    中心點,
    pos(東西 * 1, 高, 南北 * 0)
    ),
    positions.add(
    中心點,
    pos(東西 * -1, 高, 南北 * 1)
    ),
    positions.add(
    中心點,
    pos(東西 * 0, 高, 南北 * 1)
    ),
    positions.add(
    中心點,
    pos(東西 * 1, 高, 南北 * 1)
    )
    ]
}
player.onChat("Bu", function () {
    地面基準 = 100
    初始()
    地面基準 = 0
    地下層()
    地面基準 = 0
    地面層()
    地面基準 = 17
    鐵工廠()
    地面基準 = 25
    馬鈴薯工廠()
    地面基準 = 33
    金工廠()
})
function 地下層 () {
    if (true) {
        Make9(12, 12, 地面基準 - 5)
        builder.teleportTo(Point9[9])
        builder.mark()
        Make9(12, 12, 地面基準 - 0)
        builder.teleportTo(Point9[1])
        builder.fill(IRON_BLOCK)
    }
    if (true) {
        Make9(11, 11, 地面基準 - 4)
        builder.teleportTo(Point9[9])
        builder.mark()
        Make9(11, 11, 地面基準 - 1)
        builder.teleportTo(Point9[1])
        builder.fill(AIR)
    }
}
function 地面層 () {
    for (let index = 0; index < 4; index++) {
        地面基準 += 4
        Make9(11, 11, 地面基準)
        builder.teleportTo(Point9[9])
        builder.mark()
        builder.teleportTo(Point9[1])
        builder.fill(GOLD_BLOCK)
    }
    while (地面基準 > 0) {
        for (let index = 0; index <= 3; index++) {
            Make9(12, 12, 地面基準)
            builder.teleportTo(Point9[list[index]])
            builder.mark()
            Make9(11, 11, 地面基準)
            builder.teleportTo(Point9[list[index]])
            builder.fill(CHISELED_STONE_BRICK_MONSTER_EGG)
        }
        地面基準 += -1
    }
}
function 馬鈴薯工廠 () {
    地面基準 += 0
    Make9(12, 12, 地面基準 + 0)
    builder.teleportTo(Point9[9])
    builder.mark()
    Make9(12, 12, 地面基準 + 4)
    builder.teleportTo(Point9[1])
    builder.fill(CHISELED_STONE_BRICK_MONSTER_EGG)
    Make9(11, 11, 地面基準 + 1)
    builder.teleportTo(Point9[9])
    builder.mark()
    Make9(11, 11, 地面基準 + 4)
    builder.teleportTo(Point9[1])
    builder.fill(GRASS)
    Make9(12, 12, 地面基準 + 5)
    for (let index = 0; index <= 3; index++) {
        builder.teleportTo(Point9[list[index]])
        builder.mark()
        builder.teleportTo(Point9[list[index + 1]])
        builder.raiseWall(OAK_FENCE, 2)
    }
    Make9(12, 12, 地面基準 + 7)
    builder.teleportTo(Point9[9])
    builder.mark()
    builder.teleportTo(Point9[1])
    builder.fill(GLASS)
}
function 金工廠 () {
    Make9(2, 2, 地面基準 + 2)
    for (let index = 0; index <= 3; index++) {
        builder.teleportTo(Point9[list[index]])
        builder.mark()
        builder.teleportTo(Point9[list[index + 1]])
        builder.raiseWall(GLASS, 28)
    }
    list = [
    1,
    3,
    9,
    7,
    1
    ]
    Make9(24, 4, 地面基準 + 30)
    builder.teleportTo(Point9[9])
    builder.mark()
    builder.teleportTo(Point9[1])
    builder.fill(PEARLESCENT_FROGLIGHT)
    for (let index = 0; index <= 3; index++) {
        builder.teleportTo(Point9[list[index]])
        builder.mark()
        builder.teleportTo(Point9[list[index + 1]])
        builder.raiseWall(PEARLESCENT_FROGLIGHT, 3)
    }
    Make9(4, 24, 地面基準 + 30)
    builder.teleportTo(Point9[9])
    builder.mark()
    builder.teleportTo(Point9[1])
    builder.fill(PEARLESCENT_FROGLIGHT)
    for (let index = 0; index <= 3; index++) {
        builder.teleportTo(Point9[list[index]])
        builder.mark()
        builder.teleportTo(Point9[list[index + 1]])
        builder.raiseWall(PEARLESCENT_FROGLIGHT, 3)
    }
    Make9(2, 2, 地面基準 + 30)
    list = [
    1,
    2,
    3,
    4,
    6,
    7,
    8,
    9
    ]
    for (let index = 0; index <= 7; index++) {
        builder.teleportTo(Point9[list[index]])
        builder.mark()
        builder.raiseWall(OBSIDIAN, 21)
    }
    Make9(24, 2, 地面基準 + 30)
    list = [
    1,
    3,
    4,
    6,
    7,
    9
    ]
    for (let index = 0; index <= 5; index++) {
        builder.teleportTo(Point9[list[index]])
        builder.mark()
        builder.raiseWall(BLACK_CONCRETE_POWDER, 21)
        loops.pause(100)
    }
    for (let index = 0; index < 2; index++) {
        builder.teleportTo(Point9[7])
        builder.mark()
        builder.teleportTo(Point9[9])
        builder.fill(SCULK)
        builder.mark()
        builder.teleportTo(Point9[4])
        builder.mark()
        builder.teleportTo(Point9[6])
        builder.fill(SCULK)
        builder.teleportTo(Point9[1])
        builder.mark()
        builder.teleportTo(Point9[3])
        builder.fill(SCULK)
        Make9(24, 2, 地面基準 + 51)
    }
    Make9(2, 24, 地面基準 + 30)
    list = [
    1,
    7,
    2,
    8,
    3,
    9
    ]
    for (let index = 0; index <= 5; index++) {
        builder.teleportTo(Point9[list[index]])
        builder.mark()
        builder.raiseWall(BLACK_CONCRETE_POWDER, 21)
        loops.pause(100)
    }
    for (let index = 0; index < 2; index++) {
        builder.teleportTo(Point9[1])
        builder.mark()
        builder.teleportTo(Point9[7])
        builder.fill(SCULK)
        builder.teleportTo(Point9[2])
        builder.mark()
        builder.teleportTo(Point9[8])
        builder.fill(SCULK)
        builder.teleportTo(Point9[3])
        builder.mark()
        builder.teleportTo(Point9[9])
        builder.fill(SCULK)
        Make9(2, 24, 地面基準 + 51)
    }
}
let Point9: Position[] = []
let 地面基準 = 0
let list: number[] = []
let 中心點: Position = null
中心點 = world(0, 0, 0)
list = [
1,
3,
9,
7,
1
]
