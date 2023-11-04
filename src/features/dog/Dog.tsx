import { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../stores/hooks'
import { fetchDogAsync, selectDog } from '../../stores/dog/dogSlice'

import styles from './Dog.module.css'

export function Dog() {
  const dogState = useAppSelector(selectDog)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDogAsync())
    console.log('123')
  }, [dispatch])

  const _handleClick = () => {
    console.log('click')
    dispatch(fetchDogAsync())
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Dog!</div>
      <button className={styles.btn} onClick={_handleClick}>
        Fetch!
      </button>
      <p className={styles.link}>{dogState.status}</p>
      {dogState.url ? (
        <>
          <img className={styles.img} src={dogState.url} alt="dog" />
          <p className={styles.link}>Link: ${dogState.url}</p>
        </>
      ) : (
        <div>No Data</div>
      )}
    </div>
  )
}
