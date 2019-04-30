<template>
    <div class="tc-calendar">
        <div class="tc-calendar__header">
            <span class="tc-calendar__title">{{this.year}} 年 {{this.month}} 月</span>
            <div class="tc-calendar__btn-group">
                <button @click="toMonth('pre')">上一月</button>
                <button @click="toMonth('')">今天</button>
                <button @click="toMonth('next')">下个月</button>
            </div>
        </div>
        <div class="tc-calendar__body">
            <div class="tc-calendar-table__header">
                <div
                    class="tc-calendar-table__header__cell"
                    v-for="(item, index) in weekArr"
                    :key="index"
                >{{item}}</div>
            </div>
            <div class="tc-calendar-table__body">
                <div v-for="(tr, index) in rows" :key="index" class="tr">
                    <div
                        v-for="(td, day) in tr"
                        :key="day"
                        class="td"
                        :class="td.type"
                        @click="selectDay($event)"
                    >
                        <span>{{td.text}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    getFirstDayWeek,
    getMonthDays,
    getLastMonthDays
} from "../util/date-util.js";

const weekArr = ["日", "一", "二", "三", "四", "五", "六"];

export default {
    name: "tc-calendar",
    model: { // 可以自定义v-modal属性
        prop: "value",
        event: "change"
    },
    props: {
        value: {
            // 这个value 是特指 v-model 用的
            type: Date,
            default() {
                return new Date();
            }
        }
    },
    data() {
        return {
            weekArr: weekArr,
            date: this.value,
            selectDate: this.value,
            year: this.value.getFullYear(),
            month: this.value.getMonth() + 1,
            firstWeek: getFirstDayWeek(this.value)
        };
    },
    methods: {
        selectDay(e) {
            let day = e.target.innerText,
                month;
            if (e.target.className.includes("pre")) {
                month = this.month - 1;
                this.date = new Date(this.year, month - 1, day);
            } else if (e.target.className.includes("next")) {
                month = this.month + 1;
                this.date = new Date(this.year, month - 1, day);
            } else {
                month = this.month;
            }
            this.selectDate = new Date(this.year, month - 1, day);
        },
        toMonth(type) {
            if (type === "pre") {
                this.date = new Date(this.year, this.month - 2, 1);
            } else if (type === "next") {
                this.date = new Date(this.year, this.month, 1);
            } else {
                this.date = new Date();
            }
            this.selectDate = this.date;
        }
    },
    watch: {
        date(val) {
            this.year = val.getFullYear();
            this.month = val.getMonth() + 1;
            this.firstWeek = getFirstDayWeek(val);
        },
        selectDate(val) {
            this.$emit("change", val); // 实现 v-modal 响应式
        }
    },
    computed: {
        rows() {
            let lastMonthDays = getLastMonthDays(this.date); // 上个月的天数
            let first = getFirstDayWeek(this.date); // 第一天是周几
            let end = getMonthDays(this.date); // 当月有多少天
            let daysLength = Math.ceil((first + end) / 7);
            let days = Array.from({ length: daysLength }, _ => new Array());
            let selectDate = this.selectDate && this.selectDate.getDate();
            for (let i = 0; i < daysLength; i++) {
                let tr = days[i];
                for (let j = 0; j < 7; j++) {
                    let num = i * 7 + j,
                        text,
                        type;
                    if (i === 0 && j < first) {
                        text = lastMonthDays - first + i;
                        type = "pre";
                    } else if (num - first >= end) {
                        text = num - first - end;
                        type = "next";
                    } else {
                        text = num - first;
                        type = "cur";
                        if (
                            text + 1 == new Date().getDate() &&
                            this.month == new Date().getMonth() + 1
                        ) {
                            console.log("this.month: ", this.month);
                            type += " today";
                        }
                        if (text + 1 == selectDate) {
                            type += " selected";
                        }
                    }
                    tr.push({
                        text: text + 1,
                        type: type
                    });
                }
            }
            return days;
        }
    }
};
</script>
