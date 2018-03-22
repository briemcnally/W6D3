class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('follow-state');
    this.$el.on('click', (event) => this.clickHandler(event));
    this.render();

  }

  render(){
    if (this.followState === false ){
      this.$el.text("Follow!");
    } else {
      this.$el.text("Unfollow!");
    }
  }

  clickHandler(event) {
    event.preventDefault();

    const method = this.followState ? 'DELETE' : 'POST';
    // debugger
    this.$el.prop('disabled', true);
    $.ajax({
      url: `/users/${this.userId}/follow`,
      method: method,
      dataType: 'json'
    }).then(() => {
      this.followState = !this.followState;
      this.render();
      this.$el.prop('disabled', false);
    });
    // debugger
  }
}

module.exports = FollowToggle;
