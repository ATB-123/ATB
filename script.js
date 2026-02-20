/* Universal Reset */
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #b14a96;
}

/* NAVBAR */
.nav {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
}

.logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #4a58ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.name {
  background: #58a6d6;
  padding: 15px 25px;
  border-radius: 10px;
}

.menu {
  margin-left: auto;
  background: #d9d28b;
  padding: 15px 40px;
  border-radius: 25px;
  display: flex;
  gap: 60px;
  font-weight: bold;
}

.menu span {
  cursor: pointer;
}

.menu span:hover {
  opacity: .7;
}

/* GRID */
.grid {
  padding: 25px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 25px;
}

/* BOX STYLE */
.box {
  border-radius: 25px;
  padding: 30px;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* COLORS */
.team { background: #9ee1d2; }
.tour { background: #8ddc39; }
.members { background: #d87a7a; }
.match { background: #77d1e2; grid-row: 2 / 4; }
.stats { background: #4b5cff; color: white; }
