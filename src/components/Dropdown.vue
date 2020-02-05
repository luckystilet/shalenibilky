<template>
    <div class="btn-group">
        <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption.name !== undefined">
            {{ selectedOption.name }}
            <span class="caret"></span>
        </li>

        <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption.name === undefined">
            {{placeholderText}}
            <span class="caret"></span>
        </li>

        <transition name="fade">
            <ul class="dropdown-menu" v-if="showMenu">
                <li v-for="(option, idx) in options" :key="idx">
                    <a href="javascript:void(0)" @click="updateOption(option)">
                        {{ option.name }}
                    </a>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedOption: {
                    name: '',
                },
                showMenu: false,
                placeholderText: 'Please select an item',
            }
        },
        props: {
            options: {
                type: [Array, Object]
            },
            selected: {},
            placeholder: [String],
            closeOnOutsideClick: {
                type: [Boolean],
                default: true,
            },
        },
        watch: {
            selected(val, old) {
                this.selectedOption = val;
            }
        },
        mounted() {
            this.selectedOption = this.selected;
            if (this.placeholder) {
                this.placeholderText = this.placeholder;
            }

            if (this.closeOnOutsideClick) {
                document.addEventListener('click', this.clickHandler);
            }
        },

        beforeDestroy() {
            document.removeEventListener('click', this.clickHandler);
        },

        methods: {
            updateOption(option) {
                this.selectedOption = option;
                this.showMenu = false;
                this.$emit('updateOption', this.selectedOption);
            },

            toggleMenu() {
                this.showMenu = !this.showMenu;
            },

            clickHandler(event) {
                const {target} = event;
                const {$el} = this;

                if (!$el.contains(target)) {
                    this.showMenu = false;
                }
            },
        }
    }
</script>

<style lang="scss">
    .btn-group {
        min-width: 55px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        z-index: 9999;
        a:hover {
            text-decoration: none;
        }
    }
    .dropdown-toggle {
        color: #333;
        min-width: 55px;
        padding: 5px 15px 5px 5px;
        text-transform: none;
        font-weight: 300;
        background-size: 0 2px, 100% 1px;
        background-repeat: no-repeat;
        background-position: center bottom, center calc(100% - 1px);
        background-color: transparent;
        transition: background 0s ease-out;
        float: none;
        box-shadow: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        border: 1px solid #ccc;
        border-radius: 4px;
        &:hover{
            background: #e1e1e1;
            cursor: pointer;
        }
    }
    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 9999;
        float: left;
        min-width: 55px;
        margin: 2px 0 0;
        list-style: none;
        font-size: 14px;
        text-align: left;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        background-clip: padding-box;
        max-height: 165px;
        overflow-y: auto;
        padding-left: 8px;
        padding-right: 4px;
        padding-bottom: 5px;
        &::-webkit-scrollbar{
            width: 8px;
        }
        &::-webkit-scrollbar-track{
            background-color: rgba(0,0,0,.05);
            height: 40px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: rgba(0,0,0,.5);
            border-radius: 5px;
            height: 40px;
        }

    }

    .dropdown-menu > li > a {
        padding: 5px 0px;
        display: block;
        text-align: center;
        clear: both;
        font-weight: bold;
        line-height: 1.6;
        color: #333;
        white-space: nowrap;
        text-decoration: none;
        border: 1px solid transparent;
        transition: border-color .15s;
    }

    .dropdown-menu > li > a:hover {
        background: #efefef;
        border-color: #DB7449;
    }

    .dropdown-menu > li {
        overflow: hidden;
        width: 100%;
        position: relative;
        border-radius: 4px;
        margin: 5px 0 0 0;
    }

    .caret {
        width: 0;
        position: absolute;
        top: 16px;
        height: 0;
        margin-left: -24px;
        vertical-align: middle;
        border-top: 4px dashed;
        border-top: 4px solid;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        right: 7px;
    }

    li {
        list-style: none;
        user-select: none;
    }


    .fade-enter-active, .fade-leave-active {
        transition: all ease .3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .w65{
        .btn-group{
            width: 65px;
        }
        .dropdown-toggle, .dropdown-menu{
            min-width: 65px;
        }
    }
    .ns{
        .dropdown-menu{
            padding-left: 6px;
            padding-right: 6px;
        }
    }
</style>
