<template>
    <div class="sidebar-content">
      <nav>
        <ul>
          <li>
            <a href="home">
              <img src="../assets/img/icon home.png" />
              Smart Farm
            </a>
          </li>
          <li>
            <a href="/history">
              <img src="../assets/img/db1.png" />
              History
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/mess.png" />
              Message
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/device.png" />
              Devices
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/setting.png" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

    .sidebar-content {
        padding-top: 20px;
        /* overflow: hidden; */
        background-color: #09006f;
        height: 100%;
    }

    .sidebar-content nav {
        height: 100%;
    }

    .sidebar-content nav ul {
        height: 100%;
        list-style-type: none;
        margin: 0px 0 20px 0;
    }

    .sidebar-content nav ul li {
        margin: 0px 0 40px 0;
    }

    .sidebar-content nav ul li a {
        display: flex;
        flex-direction: column;
        width: 100%;
        color: white;
        text-decoration: none;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .sidebar-content nav ul li a img {
        width: 50px;
        height: 50px;
    }

    .sidebar-content nav ul li a:hover {
        background-color: #2980b9;
        border-radius: 10px;
    }
</style>