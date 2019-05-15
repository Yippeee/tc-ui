export default {
	name: 'tcTooltip',
	mounted() {
		this.getElementPosition(this.$slots.default[0]);
		const _this = this;
		const tcTooltipTpl = new Vue({
			data() {
				return {
					left: 0,
					right: 0,
					isShow: false,
					arrow_left: 0,
					arrow_top: 0,
					margin_left: 0,
				};
			},
			computed: {},
			render() {
				return (
					<transition name="tc-tooltip-fade">
						<div class="tc-tooltip" style={{ left: this.left, top: this.top }} v-show={this.isShow}>
							{_this.content}
							<span
								class={['tooltip-arrow', 'tooltip-arrow__' + _this.placement]}
								style={{
									left: this.arrow_left,
									top: this.arrow_top,
									'margin-left': this.margin_left,
								}}
							/>
						</div>
					</transition>
				);
			},
			methods: {
				getPositionIfo() {
					const leftOrRight = ['left', 'right'].includes(_this.placement);

					const elInfo = this.$el.getBoundingClientRect();
					console.log('this.$el: ', this.$el);
					const contentInfo = _this.$el.getBoundingClientRect();
					this.left = _this.referLeft - elInfo.width / 2;
					console.log('_this.referLeft: ', _this.referLeft);
					console.log('elInfo.width: ', elInfo.width);
					this.top = _this.referTop - elInfo.height * 3 / 2 - 6;
					this.arrow_left = elInfo.width / 2 - 10;
					this.arrow_top = leftOrRight ? 2 : elInfo.height - 1; // 減去border的長度
					if (leftOrRight) {
						if (_this.placement === 'left') {
							this.margin_left = elInfo.width / 2 + 10 - 1 + 'px';
						}
					}
					if (_this.placement === 'bottom') {
						this.arrow_top = this.arrow_top - elInfo.height - 20;
						this.top = this.top + 11 + 20 + contentInfo.height + elInfo.height;
					}
					if (_this.placement === 'right') {
						this.arrow_left = 0 - 20;
						this.left = this.left + 10 + contentInfo.width + 20 + elInfo.width;
					}
					this.arrow_left += 'px';
					this.arrow_top += 'px';
					this.top += 'px';
					this.left += 'px';
				},
			},
			mounted() {
				this.$el.addEventListener('mouseenter', () => {
					this.isShow = true;
					this.$nextTick(() => {
						this.getPositionIfo();
					});
				});
				this.$el.addEventListener('mouseleave', () => {
					// this.isShow = false;
				});
			},
		});
		document.body.appendChild(tcTooltipTpl.$mount().$el);
		this.$el.addEventListener('mouseenter', () => {
			tcTooltipTpl.isShow = true;
			this.$nextTick(() => {
				tcTooltipTpl.getPositionIfo();
			});
		});
		this.$el.addEventListener('mouseleave', () => {
			// tcTooltipTpl.isShow = false;
		});
		document.addEventListener('scroll', tcTooltipTpl.getPositionIfo());
	},
	props: {
		content: {
			type: String,
			default: '',
		},
		placement: {
			type: String,
			default: 'top',
		},
	},
	render() {
		return this.$slots.default[0];
	},
	data() {
		return {
			referTop: 0,
			referLeft: 0,
		};
	},
	methods: {
		getElementPosition(element) {
			const referElement = element.elm;
			console.log('referElement: ', referElement);
			const refPosition = referElement.getBoundingClientRect();
			console.log('refPosition: ', refPosition);
			const leftOrRight = ['left', 'right'].includes(this.placement);
			const topOrBottom = ['top', 'bottom'].includes(this.placement);
			this.referLeft = topOrBottom
				? refPosition.left + refPosition.width / 2
				: refPosition.left - refPosition.width / 2;
			this.referTop = leftOrRight
				? refPosition.top + refPosition.height / 2
				: refPosition.top - refPosition.height / 2;
		},
	},
};
