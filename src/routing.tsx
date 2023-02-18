import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
//import { GuardAuth } from './guards/GuardAuth';
//import { GuardNoAuth } from './guards/GuardNoAuth';

const Login = React.lazy(
  async () =>
    await import("./pages/auth/login/Login").then((m) => ({ default: m.Login }))
);

const Register = React.lazy(
  async () =>
    await import("./pages/auth/register/Register").then((m) => ({ default: m.Register }))
);
const Layout = React.lazy(
  async () =>
    await import("./pages/layout/Layout").then((m) => ({
      default: m.Layout,
    }))
);
const Dashboard = React.lazy(
  async () =>
    await import("./pages/dashboard/Dashboard").then((m) => ({
      default: m.Dashboard,
    }))
);

const Movements = React.lazy(
  async () =>
    await import("./pages/movements/Movements").then((m) => ({
      default: m.Movements,
    }))
);

// const Users = React.lazy(
//   async () =>
//     await import("./pages/users/Users").then((m) => ({ default: m.Users }))
// );
// const Characters = React.lazy(
//   async () =>
//     await import("./pages/characters/Characters").then((m) => ({
//       default: m.Characters,
//     }))
// );
// const Missions = React.lazy(
//   async () =>
//     await import("./pages/missions/Missions").then((m) => ({
//       default: m.Missions,
//     }))
// );
// const Pets = React.lazy(
//   async () =>
//     await import("./pages/pets/Pets").then((m) => ({ default: m.Pets }))
// );
// const ItemsPage = React.lazy(
//   async () =>
//     await import("./pages/items/Items").then((m) => ({ default: m.ItemsPage }))
// );
// const EnemiesPage = React.lazy(
//   async () =>
//     await import("./pages/enemies/Enemies").then((m) => ({
//       default: m.EnemiesPage,
//     }))
// );
// const ViewCharacters = React.lazy(
//   async () =>
//     await import("./pages/characters/pages/ViewCharacters").then((m) => ({
//       default: m.ViewChracters,
//     }))
// );

// const ViewMission = React.lazy(
//   async () =>
//     await import("./pages/missions/pages/ViewMissions").then((m) => ({
//       default: m.ViewMissions,
//     }))
// );

// const EditMission = React.lazy(
//   async () =>
//     await import("./pages/missions/pages/edit/EditMission").then((m) => ({
//       default: m.EditMission,
//     }))
// );

// const EditItems = React.lazy(
//   async () =>
//     await import("./pages/items/pages/edit/EditItems").then((m) => ({
//       default: m.EditItems,
//     }))
// );

// const EditPet = React.lazy(
//   async () =>
//     await import("./pages/pets/pages/edit/EditPet").then((m) => ({
//       default: m.EditPet,
//     }))
// );

// const ViewItems = React.lazy(
//   async () =>
//     await import("./pages/items/pages/ViewItems").then((m) => ({
//       default: m.ViewItems,
//     }))
// );

// const ViewPets = React.lazy(
//   async () =>
//     await import("./pages/pets/pages/ViewPets").then((m) => ({
//       default: m.ViewPets,
//     }))
// );

// const ViewUsers = React.lazy(
//   async () =>
//     await import("./pages/users/pages/ViewUsers").then((m) => ({
//       default: m.ViewUsers,
//     }))
// );

// const ViewEnemie = React.lazy(
//   async () =>
//     await import("./pages/enemies/pages/ViewEnemie").then((m) => ({
//       default: m.ViewEnemie,
//     }))
// );

// const EditEnemie = React.lazy(
//   async () =>
//     await import("./pages/enemies/pages/edit/EditEnemie").then((m) => ({
//       default: m.EditEnemie,
//     }))
// );

// const AddToken = React.lazy(
//   async () =>
//     await import("./pages/users/pages/AddToken").then((m) => ({
//       default: m.AddToken,
//     }))
// );

// const EditCharacter = React.lazy(
//   async () =>
//     await import("./pages/characters/pages/EditCharacter").then((m) => ({
//       default: m.EditCharacter,
//     }))
// );

const RouterApps = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin" replace />} />

      {/* No auth routes */}
      <Route
        path="/login"
        element={
          <React.Suspense fallback={<></>}>
            <Login />
          </React.Suspense>
        }
      />

      <Route
        path="/register"
        element={
          <React.Suspense fallback={<></>}>
            <Register />
          </React.Suspense>
        }
      />

      {/* Auth Routes */}
      <Route
        path="/admin"
        element={
          <React.Suspense fallback={<>...</>}>
            <Layout />
          </React.Suspense>
        }
      >
        <Route
          path="dashboard"
          element={
            <React.Suspense fallback={<></>}>
              <Dashboard />
            </React.Suspense>
          }
        />

        <Route
          path="movements"
          element={
            <React.Suspense fallback={<></>}>
              <Movements />
            </React.Suspense>
          }
        >
         
        </Route>

        {/* <Route
          path="characters"
          element={
            <React.Suspense fallback={<></>}>
              <Characters />
            </React.Suspense>
          }
        >
          <Route
            path=":id/view"
            element={
              <React.Suspense fallback={<></>}>
                <ViewCharacters />
              </React.Suspense>
            }
          />
          <Route
            path=":id/edit"
            element={
              <React.Suspense fallback={<></>}>
                <EditCharacter />
              </React.Suspense>
            }
          />
        </Route>
        <Route
          path="missions"
          element={
            <React.Suspense fallback={<></>}>
              <Missions />
            </React.Suspense>
          }
        >
          <Route
            path=":id/view"
            element={
              <React.Suspense fallback={<></>}>
                <ViewMission />
              </React.Suspense>
            }
          />

          <Route
            path=":id/Edit"
            element={
              <React.Suspense fallback={<></>}>
                <EditMission />
              </React.Suspense>
            }
          />
        </Route>

        <Route
          path="pets"
          element={
            <React.Suspense fallback={<></>}>
              <Pets />
            </React.Suspense>
          }
        >
          <Route
            path=":id/view"
            element={
              <React.Suspense fallback={<></>}>
                <ViewPets />
              </React.Suspense>
            }
          />

          <Route
            path=":id/Edit"
            element={
              <React.Suspense fallback={<></>}>
                <EditPet />
              </React.Suspense>
            }
          />
        </Route>
        <Route
          path="items"
          element={
            <React.Suspense fallback={<></>}>
              <ItemsPage />
            </React.Suspense>
          }
        >
          <Route
            path=":id/view"
            element={
              <React.Suspense fallback={<></>}>
                <ViewItems />
              </React.Suspense>
            }
          />
          <Route
            path=":id/edit"
            element={
              <React.Suspense fallback={<></>}>
                <EditItems />
              </React.Suspense>
            }
          />
        </Route>
        <Route
          path="enemies"
          element={
            <React.Suspense fallback={<></>}>
              <EnemiesPage />
            </React.Suspense>
          }
        >
          <Route
            path=":id/view"
            element={
              <React.Suspense fallback={<></>}>
                <ViewEnemie />
              </React.Suspense>
            }
          />

          <Route
            path=":id/edit"
            element={
              <React.Suspense fallback={<></>}>
                <EditEnemie />
              </React.Suspense>
            }
          />
        </Route> */}
      </Route>
    </Routes>
  );
};

export { RouterApps };
