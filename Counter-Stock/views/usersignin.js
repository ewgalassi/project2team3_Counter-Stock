<div class="container">
  <div class="row">
    <div class="col-8 offset-2">
      <div class="card mt-4">
        <div class="card-body">
          {{!-- <h5 class="card-title">Characters</h5> --}}
          <p>
            <strong>Username: </strong>{{this.username}}</p>
          <p>
            <strong>Stock: </strong>: {{this.stockChoice}}</p>
          <p>
            <strong>Stock price: </strong>${{this.stockPrice}}</p>
          <a href="/fight" class="btn btn-primary float-right">Battle this guy</a>
          {{!-- <p>
            <strong>Description:</strong> {{example.description}}</p> --}}
          <a href="/">← Back To Home</a>
        </div>
      </div>
    </div>
  </div>
</div>